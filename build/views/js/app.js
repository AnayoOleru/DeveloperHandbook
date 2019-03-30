'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Equivalent of jQuery .ready
document.addEventListener('DOMContentLoaded', function () {

  // Initialize variables
  var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Scroll position of body

  // Listener to resizes
  window.onresize = function (event) {
    lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  };

  // Helper functions
  // Detect offset of element
  function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: _y, left: _x };
  };

  // Add class to element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
  function addNewClass(elements, myClass) {
    // if there are no elements, we're done
    if (!elements) {
      return;
    }
    // if we have a selector, get the chosen elements
    if (typeof elements === 'string') {
      elements = document.querySelectorAll(elements);
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) {
        elements = [elements];
      }
    // add class to all chosen elements
    for (var i = 0; i < elements.length; i++) {
      // if class is not already found
      if ((' ' + elements[i].className + ' ').indexOf(' ' + myClass + ' ') < 0) {
        // add class
        elements[i].className += ' ' + myClass;
      }
    }
  };

  // Remove class from element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
  function removeClass(elements, myClass) {
    // if there are no elements, we're done
    if (!elements) {
      return;
    }

    // if we have a selector, get the chosen elements
    if (typeof elements === 'string') {
      elements = document.querySelectorAll(elements);
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) {
        elements = [elements];
      }
    // create pattern to find class name
    var reg = new RegExp('(^| )' + myClass + '($| )', 'g');
    // remove class from all chosen elements
    for (var i = 0; i < elements.length; i++) {
      elements[i].className = elements[i].className.replace(reg, ' ');
    }
  }

  // Smooth scrolling => https://codepen.io/andylobban/pen/qOLKVW
  if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
    // Function to animate the scroll
    var smoothScroll = function smoothScroll(anchor, duration) {
      // Calculate how far and how fast to scroll
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop - 40; // Remove 40 pixels for padding
      var distance = endLocation - startLocation;
      var increments = distance / (duration / 16);
      var stopAnimation;
      // Scroll the page by an increment, and check if it's time to stop
      var animateScroll = function animateScroll() {
        window.scrollBy(0, increments);
        stopAnimation();
      };
      // If scrolling down
      if (increments >= 0) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function stopAnimation() {
          var travelled = window.pageYOffset;
          if (travelled >= endLocation - increments || window.innerHeight + travelled >= document.body.offsetHeight) {
            clearInterval(runAnimation);
          }
        };
      }
      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);
    };
    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll('.scroll');
    // For each smooth scroll link
    [].forEach.call(scrollToggle, function (toggle) {
      // When the smooth scroll link is clicked
      toggle.addEventListener('click', function (e) {
        // Prevent the default link behavior
        e.preventDefault();
        // Get anchor link and calculate distance from the top
        var dataTarget = document.querySelector('.landing__section');
        var dataSpeed = toggle.getAttribute('data-speed');
        // If the anchor exists
        if (dataTarget) {
          // Scroll to the anchor
          smoothScroll(dataTarget, dataSpeed || 700);
        }
      }, false);
    });
  }

  // Listen to scroll position changes
  window.addEventListener("scroll", function () {

    // NAVIGATION BAR ON LANDING FIXED
    // If there is a #navConverter element then attach listener to scroll events
    if (document.body.contains(document.getElementById("navConverter"))) {
      var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // if the current body position is less than 20 pixels away from our converter, convert
      if (lastScrollTop > getOffset(document.getElementById('navConverter')).top - 60) {
        removeClass(document.querySelector('.navbar'), 'navbar--extended');
      } else {
        addNewClass(document.querySelector('.navbar'), 'navbar--extended');
      }
    }

    // SCROLL TO NEXT ELEMENT ON LANDING
    if (document.body.contains(document.getElementById('scrollToNext'))) {
      var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // if the current body position is less than 20 pixels away from the top, hide the icon
      if (lastScrollTop > 20) {
        addNewClass(document.getElementById('scrollToNext'), 'invisible');
      } else {
        removeClass(document.getElementById('scrollToNext'), 'invisible');
      }
    }
  });

  // Responsive mobile menu
  // Create the menu 
  if (document.getElementsByClassName("nav__mobile") && document.getElementsByClassName('nav__mobile').length > 0) {
    var navElements = document.getElementsByClassName('navbar__menu')[0].innerHTML;
    document.getElementsByClassName('nav__mobile')[0].innerHTML = navElements;
    // Load 
    var nav = responsiveNav(".nav__mobile", { // Selector
      animate: true, // Boolean: Use CSS3 transitions, true or false
      transition: 284, // Integer: Speed of the transition, in milliseconds
      label: "Menu", // String: Label for the navigation toggle
      insert: "before", // String: Insert the toggle before or after the navigation
      customToggle: "toggle", // Selector: Specify the ID of a custom toggle
      openPos: "relative", // String: Position of the opened nav, relative or static
      navClass: "nav__mobile" // String: Default CSS class. If changed, you need to edit the CSS too!
    });
  } else {
    addNewClass(document.querySelector('.navbar__menu'), 'navbar__menu--noMob');
    addNewClass(document.querySelector('.navbar__menu-mob'), 'navbar__menu-mob--noMob');
  };
});
(function (f) {
  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.flexibility = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      module.exports = function alignContent(target) {
        var start;
        var factor;

        if (target.lines.length < 2 || target.alignContent === 'stretch') {
          factor = target.crossSpace / target.lines.length;
          start = 0;

          target.lines.forEach(function (line) {
            line.crossStart = start;
            line.cross += factor;

            start += line.cross;
          });
        } else if (target.alignContent === 'flex-start') {
          start = 0;

          target.lines.forEach(function (line) {
            line.crossStart = start;

            start += line.cross;
          });
        } else if (target.alignContent === 'flex-end') {
          start = target.crossSpace;

          target.lines.forEach(function (line) {
            line.crossStart = start;

            start += line.cross;
          });
        } else if (target.alignContent === 'center') {
          start = target.crossSpace / 2;

          target.lines.forEach(function (line) {
            line.crossStart = start;

            start += line.cross;
          });
        } else if (target.alignContent === 'space-between') {
          factor = target.crossSpace / (target.lines.length - 1);
          start = 0;

          target.lines.forEach(function (line) {
            line.crossStart = start;

            start += line.cross + factor;
          });
        } else if (target.alignContent === 'space-around') {
          factor = target.crossSpace * 2 / (target.lines.length * 2);
          start = factor / 2;

          target.lines.forEach(function (line) {
            line.crossStart = start;

            start += line.cross + factor;
          });
        } else if (target.alignContent === 'stretch') {
          factor = target.crossSpace / target.lines.length;
          start = 0;

          target.lines.forEach(function (line) {
            line.crossStart = start;
            line.cross += factor;

            start += line.cross;
          });
        }
      };
    }, {}], 2: [function (require, module, exports) {
      module.exports = function alignItems(target) {
        target.lines.forEach(function (line) {
          line.children.forEach(function (child) {
            if (child.alignSelf === 'flex-start') {
              child.crossStart = line.crossStart;
            } else if (child.alignSelf === 'flex-end') {
              child.crossStart = line.crossStart + line.cross - child.crossAround;
            } else if (child.alignSelf === 'center') {
              child.crossStart = line.crossStart + (line.cross - child.crossAround) / 2;
            } else if (child.alignSelf === 'stretch') {
              child.crossStart = line.crossStart;
              child.crossAround = line.cross;
            }
          });
        });
      };
    }, {}], 3: [function (require, module, exports) {
      module.exports = function flexDirection(target, targetFlexDirection, targetAlignItems) {
        var clientRect = target.node.getBoundingClientRect();

        if (targetFlexDirection === 'row' || targetFlexDirection === 'row-reverse') {
          target.mainAxis = 'inline';
          target.crossAxis = 'block';

          if (typeof target.main === 'number' || typeof target.cross === 'number') {
            if (target.flexDirection === 'row' || targetFlexDirection === 'row-reverse') {
              target.width = target.main;
              target.height = target.cross;
            } else {
              target.width = target.cross;
              target.height = target.main;
            }
          }

          target.main = target.width;
          target.cross = target.height;

          target.mainClient = clientRect.width || target.node.offsetWidth;
          target.crossClient = clientRect.height || target.node.offsetHeight;

          target.mainBefore = target.marginLeft;
          target.mainAfter = target.marginRight;
          target.crossBefore = target.marginTop;
          target.crossAfter = target.marginBottom;
        } else {
          target.mainAxis = 'block';
          target.crossAxis = 'inline';

          target.main = target.height;
          target.cross = target.width;

          if (typeof target.main === 'number' || typeof target.cross === 'number') {
            if (target.flexDirection === 'column' || targetFlexDirection === 'column-reverse') {
              target.width = target.cross;
              target.height = target.main;
            } else {
              target.width = target.main;
              target.height = target.cross;
            }
          }

          target.mainClient = clientRect.height || target.node.offsetHeight;
          target.crossClient = clientRect.width || target.node.offsetWidth;

          target.mainBefore = target.marginTop;
          target.mainAfter = target.marginBottom;
          target.crossBefore = target.marginLeft;
          target.crossAfter = target.marginRight;
        }

        if (typeof target.flexBasis === 'number') {
          target.main = target.flexBasis;
        }

        if (target.main === 'auto') {
          target.mainAround = target.mainClient;
        } else {
          target.mainAround = target.main;
        }

        if (target.cross === 'auto') {
          target.crossAround = target.crossClient;
        } else {
          target.crossAround = target.cross;
        }

        if (typeof target.mainBefore === 'number') {
          target.mainAround += target.mainBefore;
        }

        if (typeof target.mainAfter === 'number') {
          target.mainAround += target.mainAfter;
        }

        if (typeof target.crossBefore === 'number') {
          target.crossAround += target.crossBefore;
        }

        if (typeof target.crossBefore === 'number') {
          target.crossAround += target.crossBefore;
        }

        if (target.alignSelf === 'auto') {
          target.alignSelf = targetAlignItems;
        }
      };
    }, {}], 4: [function (require, module, exports) {
      module.exports = function flexGrow(line) {
        if (line.mainSpace > 0) {
          var growFactor = line.children.reduce(function (lastGrowFactor, child) {
            return lastGrowFactor + child.flexGrow;
          }, 0);

          if (growFactor > 0) {
            line.children.forEach(function (child) {
              child.mainAround += child.flexGrow / growFactor * line.mainSpace;
            });

            line.main = line.children.reduce(function (main, child) {
              return main + child.mainAround;
            }, 0);

            line.mainSpace = 0;
          }
        }
      };
    }, {}], 5: [function (require, module, exports) {
      module.exports = function flexShrink(line) {
        if (line.mainSpace < 0) {
          var shrinkFactor = line.children.reduce(function (lastShrinkFactor, child) {
            return lastShrinkFactor + child.flexShrink;
          }, 0);

          if (shrinkFactor > 0) {
            line.children.forEach(function (child) {
              child.mainAround += child.flexShrink / shrinkFactor * line.mainSpace;
            });

            line.main = line.children.reduce(function (main, child) {
              return main + child.mainAround;
            }, 0);

            line.mainSpace = 0;
          }
        }
      };
    }, {}], 6: [function (require, module, exports) {
      module.exports = function flexboxLines(target) {
        var line;

        target.lines = [line = {
          main: 0,
          cross: 0,
          children: []
        }];

        target.children.forEach(function (child) {
          if (target.flexWrap === 'nowrap' || line.children.length === 0 || target.mainAround >= line.main + child.mainAround) {
            line.main += child.mainAround;
            line.cross = Math.max(line.cross, child.crossAround);
          } else {
            target.lines.push(line = {
              main: child.mainAround,
              cross: child.crossAround,
              children: []
            });
          }

          line.children.push(child);
        });
      };
    }, {}], 7: [function (require, module, exports) {
      module.exports = function flexbox(target) {
        target.descendants.forEach(function (descendant) {
          module.exports(descendant);
        });

        if (target.display === 'flex') {
          target.children.forEach(function (child) {
            require('./flex-direction')(child, target.flexDirection, target.alignItems);
          });
        } else {
          return target;
        }

        require('./order')(target);
        require('./flex-direction')(target, target.flexDirection, target.alignItems);
        require('./flexbox-lines')(target);

        if (target.main === 'auto') {
          target.main = Math.max(target.mainAround, target.lines.reduce(function (main, line) {
            return Math.max(main, line.main);
          }, 0));

          if (target.flexDirection === 'row') {
            target.mainAround = target.mainClient + target.mainBefore + target.mainAfter;
          } else {
            target.mainAround = target.main + target.mainBefore + target.mainAfter;
          }
        }

        if (target.cross === 'auto') {
          target.cross = target.lines.reduce(function (cross, line) {
            return cross + line.cross;
          }, 0);

          if (target.flexDirection === 'column') {
            target.crossAround = target.crossClient + target.crossBefore + target.crossAfter;
          } else {
            target.crossAround = target.cross + target.crossBefore + target.crossAfter;
          }

          target.crossSpace = target.crossAround - target.cross;
        } else {
          target.crossSpace = target.cross - target.lines.reduce(function (cross, line) {
            return cross + line.cross;
          }, 0);
        }

        require('./align-content')(target);

        target.lines.forEach(function (line) {
          line.mainSpace = target.main - line.main;

          require('./flex-grow')(line);
          require('./flex-shrink')(line);
          require('./margin-main')(line);
          require('./margin-cross')(line);
          require('./justify-content')(line, target.justifyContent);
        });

        require('./align-items')(target);

        return target;
      };
    }, { "./align-content": 1, "./align-items": 2, "./flex-direction": 3, "./flex-grow": 4, "./flex-shrink": 5, "./flexbox-lines": 6, "./justify-content": 8, "./margin-cross": 9, "./margin-main": 10, "./order": 11 }], 8: [function (require, module, exports) {
      module.exports = function justifyContent(line, targetJustifyContent) {
        var start;
        var factor;

        if (targetJustifyContent === 'flex-start') {
          start = 0;

          line.children.forEach(function (child) {
            child.mainStart = start;

            start += child.mainAround;
          });
        } else if (targetJustifyContent === 'flex-end') {
          start = line.mainSpace;

          line.children.forEach(function (child) {
            child.mainStart = start;

            start += child.mainAround;
          });
        } else if (targetJustifyContent === 'center') {
          start = line.mainSpace / 2;

          line.children.forEach(function (child) {
            child.mainStart = start;

            start += child.mainAround;
          });
        } else if (targetJustifyContent === 'space-between') {
          factor = line.mainSpace / (line.children.length - 1);

          start = 0;

          line.children.forEach(function (child) {
            child.mainStart = start;

            start += child.mainAround + factor;
          });
        } else if (targetJustifyContent === 'space-around') {
          factor = line.mainSpace * 2 / (line.children.length * 2);
          start = factor / 2;

          line.children.forEach(function (child) {
            child.mainStart = start;

            start += child.mainAround + factor;
          });
        }
      };
    }, {}], 9: [function (require, module, exports) {
      module.exports = function marginCross(line) {
        line.children.forEach(function (child) {
          var count = 0;

          if (child.crossBefore === 'auto') {
            ++count;
          }

          if (child.crossAfter === 'auto') {
            ++count;
          }

          var childSpace = line.cross - child.crossAround;

          if (child.crossBefore === 'auto') {
            child.crossBefore = childSpace / count;

            child.crossAround += child.crossBefore;
          }

          if (child.crossAfter === 'auto') {
            child.crossAfter = childSpace / count;

            child.crossAround += child.crossAfter;
          }
        });
      };
    }, {}], 10: [function (require, module, exports) {
      module.exports = function marginCross(line) {
        var count = 0;

        line.children.forEach(function (child) {
          if (child.mainBefore === 'auto') {
            ++count;
          }

          if (child.mainAfter === 'auto') {
            ++count;
          }
        });

        if (count > 0) {
          line.children.forEach(function (child) {
            if (child.mainBefore === 'auto') {
              child.mainBefore = line.mainSpace / count;

              child.mainAround += child.mainBefore;
            }

            if (child.mainAfter === 'auto') {
              child.mainAfter = line.mainSpace / count;

              child.mainAround += child.mainAfter;
            }
          });

          line.mainSpace = 0;
        }
      };
    }, {}], 11: [function (require, module, exports) {
      module.exports = function order(target) {
        target.children.sort(function (childA, childB) {
          return childA.order - childB.order || childA.index - childB.index;
        });
      };
    }, {}], 12: [function (require, module, exports) {
      module.exports = function getFlexStyles(target, data, isFlexChild) {
        var style = Object.assign(data, {
          alignContent: 'stretch',
          alignItems: 'stretch',
          alignSelf: 'auto',
          display: 'inline',
          flexBasis: 'auto',
          flexDirection: 'row',
          flexGrow: 0,
          flexShrink: 1,
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          height: 'auto',
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          maxHeight: 'none',
          maxWidth: 'none',
          minHeight: 0,
          minWidth: 0,
          order: 0,
          position: 'static',
          width: 'auto'
        });

        if (target.hasAttribute('data-style')) {
          target.setAttribute('style', target.getAttribute('data-style'));
        } else {
          target.setAttribute('data-style', target.getAttribute('style') || '');
        }

        var attr = (target.getAttribute('data-style') || '') + ';' + (target.getAttribute('data-flex') || '');
        var re = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g;
        var decl;

        while (decl = re.exec(attr)) {
          var name = decl[1].toLowerCase().replace(/-[a-z]/g, function (match) {
            return match.slice(1).toUpperCase();
          });

          style[name] = parseFloat(decl[2]);

          if (isNaN(style[name])) {
            style[name] = decl[2];
          }
        }

        if (isFlexChild) {
          target.style.display = 'inline-block';
          target.style.position = 'absolute';
        }

        var rect = target.getBoundingClientRect();

        style.clientWidth = rect.width || target.offsetWidth;
        style.clientHeight = rect.height || target.offsetHeight;

        return style;
      };
    }, {}], 13: [function (require, module, exports) {
      /*! Flexibility 2.0.0 | MIT Licensed | github.com/10up/flexibility */

      module.exports = function flexibility(target) {
        var data1 = module.exports.walk(target);

        var data2 = module.exports.flexbox(data1);

        var data3 = module.exports.write(data2);

        return data3;
      };

      module.exports.flexbox = require('./flexbox');
      module.exports.getFlexStyles = require('./getFlexStyles');
      module.exports.walk = require('./walk');
      module.exports.write = require('./write');

      // module.exports.process = require('./process');
      // module.exports.support = require('./support');
    }, { "./flexbox": 7, "./getFlexStyles": 12, "./walk": 14, "./write": 15 }], 14: [function (require, module, exports) {
      var getFlexStyles = require('../getFlexStyles');

      module.exports = function walk(target, ancestorData, isFlexChild) {
        var flexContainerRE = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i;
        var isFlexContainer = flexContainerRE.test(target.getAttribute('data-flex'));
        var data = {
          node: target,
          children: [],
          descendants: []
        };

        if (isFlexContainer) {
          if (ancestorData !== undefined) {
            ancestorData.descendants.push(data);
          }
        }

        if (isFlexContainer || !ancestorData) {
          ancestorData = data;
        }

        Array.prototype.forEach.call(target.childNodes, function (childNode) {
          if (isFlexContainer && childNode.nodeType === 3 && childNode.nodeValue.trim()) {
            var oldNode = childNode;

            childNode = target.insertBefore(document.createElement('flex-item'), oldNode);

            childNode.appendChild(oldNode);
          }

          if (childNode.nodeType === 1) {
            var childData = module.exports(childNode, ancestorData, isFlexContainer);

            if (isFlexContainer) {
              data.children.push(childData);
            }
          }
        });

        if (isFlexContainer || isFlexChild) {
          getFlexStyles(target, data, isFlexChild);
        }

        return data;
      };
    }, { "../getFlexStyles": 12 }], 15: [function (require, module, exports) {
      module.exports = function write(target) {
        target.descendants.filter(function (descendant) {
          return target.children.indexOf(descendant) === -1;
        }).forEach(function (descendant) {
          module.exports(descendant);
        });

        if (!target.display) {
          return;
        }

        var style = target.node.style;

        if ('mainStart' in target) {
          style.position = 'absolute';

          if (target.mainAxis === 'inline') {
            style.left = target.mainStart + 'px';
            style.top = target.crossStart + 'px';

            style.marginTop = target.crossBefore + 'px';
            style.marginRight = target.mainAfter + 'px';
            style.marginBottom = target.crossAfter + 'px';
            style.marginLeft = target.mainBefore + 'px';
          } else {
            style.left = target.crossStart + 'px';
            style.top = target.mainStart + 'px';

            style.marginTop = target.mainBefore + 'px';
            style.marginRight = target.crossAfter + 'px';
            style.marginBottom = target.mainAfter + 'px';
            style.marginLeft = target.crossBefore + 'px';
          }

          if (target.mainAxis === 'inline') {
            style.width = target.mainAround - target.mainBefore - target.mainAfter + 'px';
            style.height = target.crossAround - target.crossBefore - target.crossAfter + 'px';
          } else {
            if (target.cross === 'auto') {
              style.width = target.crossClient - target.crossBefore - target.crossAfter + 'px';
            } else {
              style.width = target.crossAround - target.crossBefore - target.crossAfter + 'px';
            }

            if (target.main === 'auto') {
              style.height = target.mainClient - target.mainBefore - target.mainAfter + 'px';
            } else {
              style.height = target.mainAround - target.mainBefore - target.mainAfter + 'px';
            }
          }
        } else {
          if (!style.position) {
            style.position = 'relative';
          }

          if (target.mainAxis === 'inline') {
            style.width = target.mainAround - target.mainBefore - target.mainAfter + 'px';
            style.height = target.crossAround - target.crossBefore - target.crossAfter + 'px';
          } else {
            style.width = target.crossAround - target.crossBefore - target.crossAfter + 'px';
            style.height = target.mainAround - target.mainBefore - target.mainAfter + 'px';
          }
        }

        if (target.children) {
          target.children.forEach(function (child) {
            module.exports(child);
          });
        }
      };
    }, {}] }, {}, [13])(13);
});
/*! responsive-nav.js 1.0.39
 * https://github.com/viljamis/responsive-nav.js
 * http://responsive-nav.com
 *
 * Copyright (c) 2015 @viljamis
 * Available under the MIT license
 Licensed under the MIT license.

Copyright (c) 2013 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* global Event */
(function (document, window, index) {
  // Index is used to keep multiple navs on the same page namespaced

  "use strict";

  var responsiveNav = function responsiveNav(el, options) {

    var computed = !!window.getComputedStyle;

    /**
     * getComputedStyle polyfill for old browsers
     */
    if (!computed) {
      window.getComputedStyle = function (el) {
        this.el = el;
        this.getPropertyValue = function (prop) {
          var re = /(\-([a-z]){1})/g;
          if (prop === "float") {
            prop = "styleFloat";
          }
          if (re.test(prop)) {
            prop = prop.replace(re, function () {
              return arguments[2].toUpperCase();
            });
          }
          return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        };
        return this;
      };
    }
    /* exported addEvent, removeEvent, getChildren, setAttributes, addClass, removeClass, forEach */

    /**
     * Add Event
     * fn arg can be an object or a function, thanks to handleEvent
     * read more at: http://www.thecssninja.com/javascript/handleevent
     *
     * @param  {element}  element
     * @param  {event}    event
     * @param  {Function} fn
     * @param  {boolean}  bubbling
     */
    var addEvent = function addEvent(el, evt, fn, bubble) {
      if ("addEventListener" in el) {
        // BBOS6 doesn't support handleEvent, catch and polyfill
        try {
          el.addEventListener(evt, fn, bubble);
        } catch (e) {
          if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === "object" && fn.handleEvent) {
            el.addEventListener(evt, function (e) {
              // Bind fn as this and set first arg as event object
              fn.handleEvent.call(fn, e);
            }, bubble);
          } else {
            throw e;
          }
        }
      } else if ("attachEvent" in el) {
        // check if the callback is an object and contains handleEvent
        if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === "object" && fn.handleEvent) {
          el.attachEvent("on" + evt, function () {
            // Bind fn as this
            fn.handleEvent.call(fn);
          });
        } else {
          el.attachEvent("on" + evt, fn);
        }
      }
    },


    /**
     * Remove Event
     *
     * @param  {element}  element
     * @param  {event}    event
     * @param  {Function} fn
     * @param  {boolean}  bubbling
     */
    removeEvent = function removeEvent(el, evt, fn, bubble) {
      if ("removeEventListener" in el) {
        try {
          el.removeEventListener(evt, fn, bubble);
        } catch (e) {
          if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === "object" && fn.handleEvent) {
            el.removeEventListener(evt, function (e) {
              fn.handleEvent.call(fn, e);
            }, bubble);
          } else {
            throw e;
          }
        }
      } else if ("detachEvent" in el) {
        if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === "object" && fn.handleEvent) {
          el.detachEvent("on" + evt, function () {
            fn.handleEvent.call(fn);
          });
        } else {
          el.detachEvent("on" + evt, fn);
        }
      }
    },


    /**
     * Get the children of any element
     *
     * @param  {element}
     * @return {array} Returns matching elements in an array
     */
    getChildren = function getChildren(e) {
      if (e.children.length < 1) {
        throw new Error("The Nav container has no containing elements");
      }
      // Store all children in array
      var children = [];
      // Loop through children and store in array if child != TextNode
      for (var i = 0; i < e.children.length; i++) {
        if (e.children[i].nodeType === 1) {
          children.push(e.children[i]);
        }
      }
      return children;
    },


    /**
     * Sets multiple attributes at once
     *
     * @param {element} element
     * @param {attrs}   attrs
     */
    setAttributes = function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    },


    /**
     * Adds a class to any element
     *
     * @param {element} element
     * @param {string}  class
     */
    addClass = function addClass(el, cls) {
      if (el.className.indexOf(cls) !== 0) {
        el.className += " " + cls;
        el.className = el.className.replace(/(^\s*)|(\s*$)/g, "");
      }
    },


    /**
     * Remove a class from any element
     *
     * @param  {element} element
     * @param  {string}  class
     */
    removeClass = function removeClass(el, cls) {
      var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
      el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g, "");
    },


    /**
     * forEach method that passes back the stuff we need
     *
     * @param  {array}    array
     * @param  {Function} callback
     * @param  {scope}    scope
     */
    forEach = function forEach(array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };

    var nav,
        opts,
        navToggle,
        styleElement = document.createElement("style"),
        htmlEl = document.documentElement,
        hasAnimFinished,
        isMobile,
        navOpen;

    var ResponsiveNav = function ResponsiveNav(el, options) {
      var i;

      /**
       * Default options
       * @type {Object}
       */
      this.options = {
        animate: true, // Boolean: Use CSS3 transitions, true or false
        transition: 284, // Integer: Speed of the transition, in milliseconds
        label: "Menu", // String: Label for the navigation toggle
        insert: "before", // String: Insert the toggle before or after the navigation
        customToggle: "", // Selector: Specify the ID of a custom toggle
        closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
        openPos: "relative", // String: Position of the opened nav, relative or static
        navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
        navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
        jsClass: "js", // String: 'JS enabled' class which is added to <html> element
        init: function init() {}, // Function: Init callback
        open: function open() {}, // Function: Open callback
        close: function close() {} // Function: Close callback
      };

      // User defined options
      for (i in options) {
        this.options[i] = options[i];
      }

      // Adds "js" class for <html>
      addClass(htmlEl, this.options.jsClass);

      // Wrapper
      this.wrapperEl = el.replace("#", "");

      // Try selecting ID first
      if (document.getElementById(this.wrapperEl)) {
        this.wrapper = document.getElementById(this.wrapperEl);

        // If element with an ID doesn't exist, use querySelector
      } else if (document.querySelector(this.wrapperEl)) {
        this.wrapper = document.querySelector(this.wrapperEl);

        // If element doesn't exists, stop here.
      } else {
        throw new Error("The nav element you are trying to select doesn't exist");
      }

      // Inner wrapper
      this.wrapper.inner = getChildren(this.wrapper);

      // For minification
      opts = this.options;
      nav = this.wrapper;

      // Init
      this._init(this);
    };

    ResponsiveNav.prototype = {

      /**
       * Unattaches events and removes any classes that were added
       */
      destroy: function destroy() {
        this._removeStyles();
        removeClass(nav, "closed");
        removeClass(nav, "opened");
        removeClass(nav, opts.navClass);
        removeClass(nav, opts.navClass + "-" + this.index);
        removeClass(htmlEl, opts.navActiveClass);
        nav.removeAttribute("style");
        nav.removeAttribute("aria-hidden");

        removeEvent(window, "resize", this, false);
        removeEvent(window, "focus", this, false);
        removeEvent(document.body, "touchmove", this, false);
        removeEvent(navToggle, "touchstart", this, false);
        removeEvent(navToggle, "touchend", this, false);
        removeEvent(navToggle, "mouseup", this, false);
        removeEvent(navToggle, "keyup", this, false);
        removeEvent(navToggle, "click", this, false);

        if (!opts.customToggle) {
          navToggle.parentNode.removeChild(navToggle);
        } else {
          navToggle.removeAttribute("aria-hidden");
        }
      },

      /**
       * Toggles the navigation open/close
       */
      toggle: function toggle() {
        if (hasAnimFinished === true) {
          if (!navOpen) {
            this.open();
          } else {
            this.close();
          }
        }
      },

      /**
       * Opens the navigation
       */
      open: function open() {
        if (!navOpen) {
          removeClass(nav, "closed");
          addClass(nav, "opened");
          addClass(htmlEl, opts.navActiveClass);
          addClass(navToggle, "active");
          nav.style.position = opts.openPos;
          setAttributes(nav, { "aria-hidden": "false" });
          navOpen = true;
          opts.open();
        }
      },

      /**
       * Closes the navigation
       */
      close: function close() {
        if (navOpen) {
          addClass(nav, "closed");
          removeClass(nav, "opened");
          removeClass(htmlEl, opts.navActiveClass);
          removeClass(navToggle, "active");
          setAttributes(nav, { "aria-hidden": "true" });

          // If animations are enabled, wait until they finish
          if (opts.animate) {
            hasAnimFinished = false;
            setTimeout(function () {
              nav.style.position = "absolute";
              hasAnimFinished = true;
            }, opts.transition + 10);

            // Animations aren't enabled, we can do these immediately
          } else {
            nav.style.position = "absolute";
          }

          navOpen = false;
          opts.close();
        }
      },

      /**
       * Resize is called on window resize and orientation change.
       * It initializes the CSS styles and height calculations.
       */
      resize: function resize() {

        // Resize watches navigation toggle's display state
        if (window.getComputedStyle(navToggle, null).getPropertyValue("display") !== "none") {

          isMobile = true;
          setAttributes(navToggle, { "aria-hidden": "false" });

          // If the navigation is hidden
          if (nav.className.match(/(^|\s)closed(\s|$)/)) {
            setAttributes(nav, { "aria-hidden": "true" });
            nav.style.position = "absolute";
          }

          this._createStyles();
          this._calcHeight();
        } else {

          isMobile = false;
          setAttributes(navToggle, { "aria-hidden": "true" });
          setAttributes(nav, { "aria-hidden": "false" });
          nav.style.position = opts.openPos;
          this._removeStyles();
        }
      },

      /**
       * Takes care of all even handling
       *
       * @param  {event} event
       * @return {type} returns the type of event that should be used
       */
      handleEvent: function handleEvent(e) {
        var evt = e || window.event;

        switch (evt.type) {
          case "touchstart":
            this._onTouchStart(evt);
            break;
          case "touchmove":
            this._onTouchMove(evt);
            break;
          case "touchend":
          case "mouseup":
            this._onTouchEnd(evt);
            break;
          case "click":
            this._preventDefault(evt);
            break;
          case "keyup":
            this._onKeyUp(evt);
            break;
          case "focus":
          case "resize":
            this.resize(evt);
            break;
        }
      },

      /**
       * Initializes the widget
       */
      _init: function _init() {
        this.index = index++;

        addClass(nav, opts.navClass);
        addClass(nav, opts.navClass + "-" + this.index);
        addClass(nav, "closed");
        hasAnimFinished = true;
        navOpen = false;

        this._closeOnNavClick();
        this._createToggle();
        this._transitions();
        this.resize();

        /**
         * On IE8 the resize event triggers too early for some reason
         * so it's called here again on init to make sure all the
         * calculated styles are correct.
         */
        var self = this;
        setTimeout(function () {
          self.resize();
        }, 20);

        addEvent(window, "resize", this, false);
        addEvent(window, "focus", this, false);
        addEvent(document.body, "touchmove", this, false);
        addEvent(navToggle, "touchstart", this, false);
        addEvent(navToggle, "touchend", this, false);
        addEvent(navToggle, "mouseup", this, false);
        addEvent(navToggle, "keyup", this, false);
        addEvent(navToggle, "click", this, false);

        /**
         * Init callback here
         */
        opts.init();
      },

      /**
       * Creates Styles to the <head>
       */
      _createStyles: function _createStyles() {
        if (!styleElement.parentNode) {
          styleElement.type = "text/css";
          document.getElementsByTagName("head")[0].appendChild(styleElement);
        }
      },

      /**
       * Removes styles from the <head>
       */
      _removeStyles: function _removeStyles() {
        if (styleElement.parentNode) {
          styleElement.parentNode.removeChild(styleElement);
        }
      },

      /**
       * Creates Navigation Toggle
       */
      _createToggle: function _createToggle() {

        // If there's no toggle, let's create one
        if (!opts.customToggle) {
          var toggle = document.createElement("a");
          toggle.innerHTML = opts.label;
          setAttributes(toggle, {
            "href": "#",
            "class": "nav-toggle"
          });

          // Determine where to insert the toggle
          if (opts.insert === "after") {
            nav.parentNode.insertBefore(toggle, nav.nextSibling);
          } else {
            nav.parentNode.insertBefore(toggle, nav);
          }

          navToggle = toggle;

          // There is a toggle already, let's use that one
        } else {
          var toggleEl = opts.customToggle.replace("#", "");

          if (document.getElementById(toggleEl)) {
            navToggle = document.getElementById(toggleEl);
          } else if (document.querySelector(toggleEl)) {
            navToggle = document.querySelector(toggleEl);
          } else {
            throw new Error("The custom nav toggle you are trying to select doesn't exist");
          }
        }
      },

      /**
       * Closes the navigation when a link inside is clicked.
       */
      _closeOnNavClick: function _closeOnNavClick() {
        if (opts.closeOnNavClick) {
          var links = nav.getElementsByTagName("a"),
              self = this;
          forEach(links, function (i, el) {
            addEvent(links[i], "click", function () {
              if (isMobile) {
                self.toggle();
              }
            }, false);
          });
        }
      },

      /**
       * Prevents the default functionality.
       *
       * @param  {event} event
       */
      _preventDefault: function _preventDefault(e) {
        if (e.preventDefault) {
          if (e.stopImmediatePropagation) {
            e.stopImmediatePropagation();
          }
          e.preventDefault();
          e.stopPropagation();
          return false;

          // This is strictly for old IE
        } else {
          e.returnValue = false;
        }
      },

      /**
       * On touch start we get the location of the touch.
       *
       * @param  {event} event
       */
      _onTouchStart: function _onTouchStart(e) {
        if (!Event.prototype.stopImmediatePropagation) {
          this._preventDefault(e);
        }
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.touchHasMoved = false;

        /**
         * Remove mouseup event completely here to avoid
         * double triggering the event.
         */
        removeEvent(navToggle, "mouseup", this, false);
      },

      /**
       * Check if the user is scrolling instead of tapping.
       *
       * @param  {event} event
       */
      _onTouchMove: function _onTouchMove(e) {
        if (Math.abs(e.touches[0].clientX - this.startX) > 10 || Math.abs(e.touches[0].clientY - this.startY) > 10) {
          this.touchHasMoved = true;
        }
      },

      /**
       * On touch end toggle the navigation.
       *
       * @param  {event} event
       */
      _onTouchEnd: function _onTouchEnd(e) {
        this._preventDefault(e);
        if (!isMobile) {
          return;
        }

        // If the user isn't scrolling
        if (!this.touchHasMoved) {

          // If the event type is touch
          if (e.type === "touchend") {
            this.toggle();
            return;

            // Event type was click, not touch
          } else {
            var evt = e || window.event;

            // If it isn't a right click, do toggling
            if (!(evt.which === 3 || evt.button === 2)) {
              this.toggle();
            }
          }
        }
      },

      /**
       * For keyboard accessibility, toggle the navigation on Enter
       * keypress too.
       *
       * @param  {event} event
       */
      _onKeyUp: function _onKeyUp(e) {
        var evt = e || window.event;
        if (evt.keyCode === 13) {
          this.toggle();
        }
      },

      /**
       * Adds the needed CSS transitions if animations are enabled
       */
      _transitions: function _transitions() {
        if (opts.animate) {
          var objStyle = nav.style,
              transition = "max-height " + opts.transition + "ms";

          objStyle.WebkitTransition = objStyle.MozTransition = objStyle.OTransition = objStyle.transition = transition;
        }
      },

      /**
       * Calculates the height of the navigation and then creates
       * styles which are later added to the page <head>
       */
      _calcHeight: function _calcHeight() {
        var savedHeight = 0;
        for (var i = 0; i < nav.inner.length; i++) {
          savedHeight += nav.inner[i].offsetHeight;
        }

        var innerStyles = "." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened{max-height:" + savedHeight + "px !important} ." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened.dropdown-active {max-height:9999px !important}";

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = innerStyles;
        } else {
          styleElement.innerHTML = innerStyles;
        }

        innerStyles = "";
      }

    };

    /**
     * Return new Responsive Nav
     */
    return new ResponsiveNav(el, options);
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = responsiveNav;
  } else {
    window.responsiveNav = responsiveNav;
  }
})(document, window, 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpZXdzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsYXN0U2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvbnJlc2l6ZSIsImV2ZW50IiwiZ2V0T2Zmc2V0IiwiZWwiLCJfeCIsIl95IiwiaXNOYU4iLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsTGVmdCIsIm9mZnNldFBhcmVudCIsInRvcCIsImxlZnQiLCJhZGROZXdDbGFzcyIsImVsZW1lbnRzIiwibXlDbGFzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWdOYW1lIiwiaSIsImxlbmd0aCIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJyZW1vdmVDbGFzcyIsInJlZyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJzbW9vdGhTY3JvbGwiLCJhbmNob3IiLCJkdXJhdGlvbiIsInN0YXJ0TG9jYXRpb24iLCJlbmRMb2NhdGlvbiIsImRpc3RhbmNlIiwiaW5jcmVtZW50cyIsInN0b3BBbmltYXRpb24iLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsQnkiLCJ0cmF2ZWxsZWQiLCJpbm5lckhlaWdodCIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJjbGVhckludGVydmFsIiwicnVuQW5pbWF0aW9uIiwic2V0SW50ZXJ2YWwiLCJzY3JvbGxUb2dnbGUiLCJjYWxsIiwidG9nZ2xlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhU3BlZWQiLCJnZXRBdHRyaWJ1dGUiLCJjb250YWlucyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5hdkVsZW1lbnRzIiwiaW5uZXJIVE1MIiwibmF2IiwicmVzcG9uc2l2ZU5hdiIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwibGFiZWwiLCJpbnNlcnQiLCJjdXN0b21Ub2dnbGUiLCJvcGVuUG9zIiwibmF2Q2xhc3MiLCJmIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImciLCJnbG9iYWwiLCJzZWxmIiwiZmxleGliaWxpdHkiLCJ0IiwibiIsInIiLCJzIiwibyIsInUiLCJhIiwicmVxdWlyZSIsIkVycm9yIiwiY29kZSIsImwiLCJhbGlnbkNvbnRlbnQiLCJ0YXJnZXQiLCJzdGFydCIsImZhY3RvciIsImxpbmVzIiwiY3Jvc3NTcGFjZSIsImxpbmUiLCJjcm9zc1N0YXJ0IiwiY3Jvc3MiLCJhbGlnbkl0ZW1zIiwiY2hpbGRyZW4iLCJjaGlsZCIsImFsaWduU2VsZiIsImNyb3NzQXJvdW5kIiwiZmxleERpcmVjdGlvbiIsInRhcmdldEZsZXhEaXJlY3Rpb24iLCJ0YXJnZXRBbGlnbkl0ZW1zIiwiY2xpZW50UmVjdCIsIm5vZGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtYWluQXhpcyIsImNyb3NzQXhpcyIsIm1haW4iLCJ3aWR0aCIsImhlaWdodCIsIm1haW5DbGllbnQiLCJvZmZzZXRXaWR0aCIsImNyb3NzQ2xpZW50IiwibWFpbkJlZm9yZSIsIm1hcmdpbkxlZnQiLCJtYWluQWZ0ZXIiLCJtYXJnaW5SaWdodCIsImNyb3NzQmVmb3JlIiwibWFyZ2luVG9wIiwiY3Jvc3NBZnRlciIsIm1hcmdpbkJvdHRvbSIsImZsZXhCYXNpcyIsIm1haW5Bcm91bmQiLCJmbGV4R3JvdyIsIm1haW5TcGFjZSIsImdyb3dGYWN0b3IiLCJyZWR1Y2UiLCJsYXN0R3Jvd0ZhY3RvciIsImZsZXhTaHJpbmsiLCJzaHJpbmtGYWN0b3IiLCJsYXN0U2hyaW5rRmFjdG9yIiwiZmxleGJveExpbmVzIiwiZmxleFdyYXAiLCJNYXRoIiwibWF4IiwicHVzaCIsImZsZXhib3giLCJkZXNjZW5kYW50cyIsImRlc2NlbmRhbnQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ0YXJnZXRKdXN0aWZ5Q29udGVudCIsIm1haW5TdGFydCIsIm1hcmdpbkNyb3NzIiwiY291bnQiLCJjaGlsZFNwYWNlIiwib3JkZXIiLCJzb3J0IiwiY2hpbGRBIiwiY2hpbGRCIiwiaW5kZXgiLCJnZXRGbGV4U3R5bGVzIiwiZGF0YSIsImlzRmxleENoaWxkIiwic3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwicG9zaXRpb24iLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyIiwicmUiLCJkZWNsIiwiZXhlYyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwic2xpY2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlRmxvYXQiLCJyZWN0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkYXRhMSIsIndhbGsiLCJkYXRhMiIsImRhdGEzIiwid3JpdGUiLCJhbmNlc3RvckRhdGEiLCJmbGV4Q29udGFpbmVyUkUiLCJpc0ZsZXhDb250YWluZXIiLCJ0ZXN0IiwidW5kZWZpbmVkIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZSIsIm5vZGVUeXBlIiwibm9kZVZhbHVlIiwidHJpbSIsIm9sZE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjaGlsZERhdGEiLCJmaWx0ZXIiLCJvcHRpb25zIiwiY29tcHV0ZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInByb3AiLCJhcmd1bWVudHMiLCJjdXJyZW50U3R5bGUiLCJhZGRFdmVudCIsImV2dCIsImZuIiwiYnViYmxlIiwiaGFuZGxlRXZlbnQiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiZ2V0Q2hpbGRyZW4iLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cnMiLCJrZXkiLCJhZGRDbGFzcyIsImNscyIsImFycmF5IiwiY2FsbGJhY2siLCJzY29wZSIsIm9wdHMiLCJuYXZUb2dnbGUiLCJzdHlsZUVsZW1lbnQiLCJodG1sRWwiLCJoYXNBbmltRmluaXNoZWQiLCJpc01vYmlsZSIsIm5hdk9wZW4iLCJSZXNwb25zaXZlTmF2IiwiY2xvc2VPbk5hdkNsaWNrIiwibmF2QWN0aXZlQ2xhc3MiLCJqc0NsYXNzIiwiaW5pdCIsIm9wZW4iLCJjbG9zZSIsIndyYXBwZXJFbCIsIndyYXBwZXIiLCJpbm5lciIsIl9pbml0IiwiZGVzdHJveSIsIl9yZW1vdmVTdHlsZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVzaXplIiwiX2NyZWF0ZVN0eWxlcyIsIl9jYWxjSGVpZ2h0IiwidHlwZSIsIl9vblRvdWNoU3RhcnQiLCJfb25Ub3VjaE1vdmUiLCJfb25Ub3VjaEVuZCIsIl9wcmV2ZW50RGVmYXVsdCIsIl9vbktleVVwIiwiX2Nsb3NlT25OYXZDbGljayIsIl9jcmVhdGVUb2dnbGUiLCJfdHJhbnNpdGlvbnMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm5leHRTaWJsaW5nIiwidG9nZ2xlRWwiLCJsaW5rcyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsInJldHVyblZhbHVlIiwiRXZlbnQiLCJzdGFydFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJ0b3VjaEhhc01vdmVkIiwiYWJzIiwid2hpY2giLCJidXR0b24iLCJrZXlDb2RlIiwib2JqU3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwic2F2ZWRIZWlnaHQiLCJpbm5lclN0eWxlcyIsInN0eWxlU2hlZXQiLCJjc3NUZXh0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQTZDLFlBQVU7O0FBRXREO0FBQ0EsTUFBSUMsZ0JBQWdCQyxPQUFPQyxXQUFQLElBQXNCSixTQUFTSyxlQUFULENB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V0FBTyxJQUFJcEQsYUFBSixDQUFrQnZPLEVBQWxCLEVBQXNCdU0sT0FBdEIsQ0FBUDtBQUVELEdBaG9CRDs7QUFrb0JBLE1BQUksT0FBT25JLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9ELE9BQTVDLEVBQXFEO0FBQ25EQyxXQUFPRCxPQUFQLEdBQWlCVCxhQUFqQjtBQUNELEdBRkQsTUFFTztBQUNMakUsV0FBT2lFLGFBQVAsR0FBdUJBLGFBQXZCO0FBQ0Q7QUFFRixDQTdvQkEsRUE2b0JDcEUsUUE3b0JELEVBNm9CV0csTUE3b0JYLEVBNm9CbUIsQ0E3b0JuQixDQUFEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVxdWl2YWxlbnQgb2YgalF1ZXJ5IC5yZWFkeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsZnVuY3Rpb24oKXtcblxuXHQvLyBJbml0aWFsaXplIHZhcmlhYmxlc1xuXHR2YXIgbGFzdFNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wOyAvLyBTY3JvbGwgcG9zaXRpb24gb2YgYm9keVxuXG5cdC8vIExpc3RlbmVyIHRvIHJlc2l6ZXNcblx0d2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBcdGxhc3RTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0fTtcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb25zXG5cdC8vIERldGVjdCBvZmZzZXQgb2YgZWxlbWVudFxuXHRmdW5jdGlvbiBnZXRPZmZzZXQoIGVsICkge1xuXHRcdHZhciBfeCA9IDA7XG5cdFx0dmFyIF95ID0gMDtcblx0XHR3aGlsZSggZWwgJiYgIWlzTmFOKCBlbC5vZmZzZXRMZWZ0ICkgJiYgIWlzTmFOKCBlbC5vZmZzZXRUb3AgKSApIHtcblx0XHRcdF94ICs9IGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0O1xuXHRcdFx0X3kgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xuXHRcdFx0ZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiB7IHRvcDogX3ksIGxlZnQ6IF94IH07XG5cdH07XG5cblx0Ly8gQWRkIGNsYXNzIHRvIGVsZW1lbnQgPT4gaHR0cHM6Ly93d3cuc2l0ZXBvaW50LmNvbS9hZGQtcmVtb3ZlLWNzcy1jbGFzcy12YW5pbGxhLWpzL1xuXHRmdW5jdGlvbiBhZGROZXdDbGFzcyhlbGVtZW50cywgbXlDbGFzcykge1xuXHRcdC8vIGlmIHRoZXJlIGFyZSBubyBlbGVtZW50cywgd2UncmUgZG9uZVxuXHRcdGlmICghZWxlbWVudHMpIHsgcmV0dXJuOyB9XG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIHNlbGVjdG9yLCBnZXQgdGhlIGNob3NlbiBlbGVtZW50c1xuXHRcdGlmICh0eXBlb2YoZWxlbWVudHMpID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcblx0XHR9XG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIHNpbmdsZSBET00gZWxlbWVudCwgbWFrZSBpdCBhbiBhcnJheSB0byBzaW1wbGlmeSBiZWhhdmlvclxuXHRcdGVsc2UgaWYgKGVsZW1lbnRzLnRhZ05hbWUpIHsgZWxlbWVudHM9W2VsZW1lbnRzXTsgfVxuXHRcdC8vIGFkZCBjbGFzcyB0byBhbGwgY2hvc2VuIGVsZW1lbnRzXG5cdFx0Zm9yICh2YXIgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBpZiBjbGFzcyBpcyBub3QgYWxyZWFkeSBmb3VuZFxuXHRcdFx0aWYgKCAoJyAnK2VsZW1lbnRzW2ldLmNsYXNzTmFtZSsnICcpLmluZGV4T2YoJyAnK215Q2xhc3MrJyAnKSA8IDAgKSB7XG5cdFx0XHQvLyBhZGQgY2xhc3Ncblx0XHRcdGVsZW1lbnRzW2ldLmNsYXNzTmFtZSArPSAnICcgKyBteUNsYXNzO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBSZW1vdmUgY2xhc3MgZnJvbSBlbGVtZW50ID0+IGh0dHBzOi8vd3d3LnNpdGVwb2ludC5jb20vYWRkLXJlbW92ZS1jc3MtY2xhc3MtdmFuaWxsYS1qcy9cblx0ZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudHMsIG15Q2xhc3MpIHtcblx0XHQvLyBpZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMsIHdlJ3JlIGRvbmVcblx0XHRpZiAoIWVsZW1lbnRzKSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIHNlbGVjdG9yLCBnZXQgdGhlIGNob3NlbiBlbGVtZW50c1xuXHRcdGlmICh0eXBlb2YoZWxlbWVudHMpID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcblx0XHR9XG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIHNpbmdsZSBET00gZWxlbWVudCwgbWFrZSBpdCBhbiBhcnJheSB0byBzaW1wbGlmeSBiZWhhdmlvclxuXHRcdGVsc2UgaWYgKGVsZW1lbnRzLnRhZ05hbWUpIHsgZWxlbWVudHM9W2VsZW1lbnRzXTsgfVxuXHRcdC8vIGNyZWF0ZSBwYXR0ZXJuIHRvIGZpbmQgY2xhc3MgbmFtZVxuXHRcdHZhciByZWcgPSBuZXcgUmVnRXhwKCcoXnwgKScrbXlDbGFzcysnKCR8ICknLCdnJyk7XG5cdFx0Ly8gcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGNob3NlbiBlbGVtZW50c1xuXHRcdGZvciAodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZWxlbWVudHNbaV0uY2xhc3NOYW1lID0gZWxlbWVudHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UocmVnLCcgJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU21vb3RoIHNjcm9sbGluZyA9PiBodHRwczovL2NvZGVwZW4uaW8vYW5keWxvYmJhbi9wZW4vcU9MS1ZXXG5cdGlmICggJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50ICYmICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgJiYgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggKSB7XG5cdFx0Ly8gRnVuY3Rpb24gdG8gYW5pbWF0ZSB0aGUgc2Nyb2xsXG5cdFx0dmFyIHNtb290aFNjcm9sbCA9IGZ1bmN0aW9uIChhbmNob3IsIGR1cmF0aW9uKSB7XG5cdFx0Ly8gQ2FsY3VsYXRlIGhvdyBmYXIgYW5kIGhvdyBmYXN0IHRvIHNjcm9sbFxuXHRcdHZhciBzdGFydExvY2F0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdHZhciBlbmRMb2NhdGlvbiA9IGFuY2hvci5vZmZzZXRUb3AgLSA0MDsgLy8gUmVtb3ZlIDQwIHBpeGVscyBmb3IgcGFkZGluZ1xuXHRcdHZhciBkaXN0YW5jZSA9IGVuZExvY2F0aW9uIC0gc3RhcnRMb2NhdGlvbjtcblx0XHR2YXIgaW5jcmVtZW50cyA9IGRpc3RhbmNlLyhkdXJhdGlvbi8xNik7XG5cdFx0dmFyIHN0b3BBbmltYXRpb247XG5cdFx0Ly8gU2Nyb2xsIHRoZSBwYWdlIGJ5IGFuIGluY3JlbWVudCwgYW5kIGNoZWNrIGlmIGl0J3MgdGltZSB0byBzdG9wXG5cdFx0dmFyIGFuaW1hdGVTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgaW5jcmVtZW50cyk7XG5cdFx0XHRzdG9wQW5pbWF0aW9uKCk7XG5cdFx0fTtcblx0Ly8gSWYgc2Nyb2xsaW5nIGRvd25cblx0XHRpZiAoIGluY3JlbWVudHMgPj0gMCApIHtcblx0XHQvLyBTdG9wIGFuaW1hdGlvbiB3aGVuIHlvdSByZWFjaCB0aGUgYW5jaG9yIE9SIHRoZSBib3R0b20gb2YgdGhlIHBhZ2Vcblx0XHRcdHN0b3BBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB0cmF2ZWxsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0XHRcdGlmICggKHRyYXZlbGxlZCA+PSAoZW5kTG9jYXRpb24gLSBpbmNyZW1lbnRzKSkgfHwgKCh3aW5kb3cuaW5uZXJIZWlnaHQgKyB0cmF2ZWxsZWQpID49IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KSApIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHJ1bkFuaW1hdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuICAgICAgICAgICAgLy8gTG9vcCB0aGUgYW5pbWF0aW9uIGZ1bmN0aW9uXG4gICAgICAgICAgICB2YXIgcnVuQW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoYW5pbWF0ZVNjcm9sbCwgMTYpO1xuICAgICAgICB9O1xuXHRcdC8vIERlZmluZSBzbW9vdGggc2Nyb2xsIGxpbmtzXG5cdFx0dmFyIHNjcm9sbFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwnKTtcblx0XHQvLyBGb3IgZWFjaCBzbW9vdGggc2Nyb2xsIGxpbmtcblx0XHRbXS5mb3JFYWNoLmNhbGwoc2Nyb2xsVG9nZ2xlLCBmdW5jdGlvbiAodG9nZ2xlKSB7XG5cdFx0XHQvLyBXaGVuIHRoZSBzbW9vdGggc2Nyb2xsIGxpbmsgaXMgY2xpY2tlZFxuXHRcdFx0dG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgbGluayBiZWhhdmlvclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBHZXQgYW5jaG9yIGxpbmsgYW5kIGNhbGN1bGF0ZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3Bcblx0XHR2YXIgZGF0YVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nX19zZWN0aW9uJyk7XG5cdFx0dmFyIGRhdGFTcGVlZCA9IHRvZ2dsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKTtcblx0IFx0Ly8gSWYgdGhlIGFuY2hvciBleGlzdHNcblx0XHRpZiAoZGF0YVRhcmdldCkge1xuXHRcdFx0Ly8gU2Nyb2xsIHRvIHRoZSBhbmNob3Jcblx0XHRcdFx0c21vb3RoU2Nyb2xsKGRhdGFUYXJnZXQsIGRhdGFTcGVlZCB8fCA3MDApO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0XHR9KTtcblx0fVxuXG5cdFxuXHRcdC8vIExpc3RlbiB0byBzY3JvbGwgcG9zaXRpb24gY2hhbmdlc1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGZ1bmN0aW9uKCl7XG5cblx0XHQvLyBOQVZJR0FUSU9OIEJBUiBPTiBMQU5ESU5HIEZJWEVEXG5cdFx0Ly8gSWYgdGhlcmUgaXMgYSAjbmF2Q29udmVydGVyIGVsZW1lbnQgdGhlbiBhdHRhY2ggbGlzdGVuZXIgdG8gc2Nyb2xsIGV2ZW50c1xuXHRcdGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2Q29udmVydGVyXCIpKSl7XG5cdFx0XHR2YXIgbGFzdFNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdFx0Ly8gaWYgdGhlIGN1cnJlbnQgYm9keSBwb3NpdGlvbiBpcyBsZXNzIHRoYW4gMjAgcGl4ZWxzIGF3YXkgZnJvbSBvdXIgY29udmVydGVyLCBjb252ZXJ0XG5cdFx0XHRpZiAobGFzdFNjcm9sbFRvcCA+IChnZXRPZmZzZXQoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZDb252ZXJ0ZXInKSApLnRvcCAtIDYwKSl7IHJlbW92ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKSwnbmF2YmFyLS1leHRlbmRlZCcpO30gZWxzZSB7YWRkTmV3Q2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpLCduYXZiYXItLWV4dGVuZGVkJyk7fVxuXHRcdH1cblxuXHRcdC8vIFNDUk9MTCBUTyBORVhUIEVMRU1FTlQgT04gTEFORElOR1xuXHRcdGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxUb05leHQnKSkpe1xuXHRcdFx0dmFyIGxhc3RTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IGJvZHkgcG9zaXRpb24gaXMgbGVzcyB0aGFuIDIwIHBpeGVscyBhd2F5IGZyb20gdGhlIHRvcCwgaGlkZSB0aGUgaWNvblxuXHRcdFx0aWYgKGxhc3RTY3JvbGxUb3AgPiAyMCl7IGFkZE5ld0NsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxUb05leHQnKSwnaW52aXNpYmxlJyk7fSBlbHNlIHtyZW1vdmVDbGFzcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsVG9OZXh0JyksJ2ludmlzaWJsZScpO31cblx0XHR9XG5cdH0pO1xuXG5cdC8vIFJlc3BvbnNpdmUgbW9iaWxlIG1lbnVcblx0Ly8gQ3JlYXRlIHRoZSBtZW51IFxuXHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fbW9iaWxlXCIpICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9fbW9iaWxlJykubGVuZ3RoID4gMCl7XG5cdFx0dmFyIG5hdkVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19tZW51JylbMF0uaW5uZXJIVE1MO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9fbW9iaWxlJylbMF0uaW5uZXJIVE1MID0gbmF2RWxlbWVudHM7XG5cdFx0Ly8gTG9hZCBcblx0XHR2YXIgbmF2ID0gcmVzcG9uc2l2ZU5hdihcIi5uYXZfX21vYmlsZVwiLCB7IC8vIFNlbGVjdG9yXG5cdFx0XHRhbmltYXRlOiB0cnVlLCAvLyBCb29sZWFuOiBVc2UgQ1NTMyB0cmFuc2l0aW9ucywgdHJ1ZSBvciBmYWxzZVxuXHRcdFx0dHJhbnNpdGlvbjogMjg0LCAvLyBJbnRlZ2VyOiBTcGVlZCBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzXG5cdFx0XHRsYWJlbDogXCJNZW51XCIsIC8vIFN0cmluZzogTGFiZWwgZm9yIHRoZSBuYXZpZ2F0aW9uIHRvZ2dsZVxuXHRcdFx0aW5zZXJ0OiBcImJlZm9yZVwiLCAvLyBTdHJpbmc6IEluc2VydCB0aGUgdG9nZ2xlIGJlZm9yZSBvciBhZnRlciB0aGUgbmF2aWdhdGlvblxuXHRcdFx0Y3VzdG9tVG9nZ2xlOiBcInRvZ2dsZVwiLCAvLyBTZWxlY3RvcjogU3BlY2lmeSB0aGUgSUQgb2YgYSBjdXN0b20gdG9nZ2xlXG5cdFx0XHRvcGVuUG9zOiBcInJlbGF0aXZlXCIsIC8vIFN0cmluZzogUG9zaXRpb24gb2YgdGhlIG9wZW5lZCBuYXYsIHJlbGF0aXZlIG9yIHN0YXRpY1xuXHRcdFx0bmF2Q2xhc3M6IFwibmF2X19tb2JpbGVcIiwgLy8gU3RyaW5nOiBEZWZhdWx0IENTUyBjbGFzcy4gSWYgY2hhbmdlZCwgeW91IG5lZWQgdG8gZWRpdCB0aGUgQ1NTIHRvbyFcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHQgYWRkTmV3Q2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbWVudScpLCduYXZiYXJfX21lbnUtLW5vTW9iJyk7XG5cdFx0IGFkZE5ld0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX21lbnUtbW9iJyksICduYXZiYXJfX21lbnUtbW9iLS1ub01vYicpO1xuXHR9O1x0XG59KTtcbihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLmZsZXhpYmlsaXR5ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbGlnbkNvbnRlbnQodGFyZ2V0KSB7XG5cdHZhciBzdGFydDtcblx0dmFyIGZhY3RvcjtcblxuXHRpZiAodGFyZ2V0LmxpbmVzLmxlbmd0aCA8IDIgfHwgdGFyZ2V0LmFsaWduQ29udGVudCA9PT0gJ3N0cmV0Y2gnKSB7XG5cdFx0ZmFjdG9yID0gdGFyZ2V0LmNyb3NzU3BhY2UgLyB0YXJnZXQubGluZXMubGVuZ3RoO1xuXHRcdHN0YXJ0ID0gMDtcblxuXHRcdHRhcmdldC5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdFx0XHRsaW5lLmNyb3NzU3RhcnQgPSBzdGFydDtcblx0XHRcdGxpbmUuY3Jvc3MgKz0gZmFjdG9yO1xuXG5cdFx0XHRzdGFydCArPSBsaW5lLmNyb3NzO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHRhcmdldC5hbGlnbkNvbnRlbnQgPT09ICdmbGV4LXN0YXJ0Jykge1xuXHRcdHN0YXJ0ID0gMDtcblxuXHRcdHRhcmdldC5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdFx0XHRsaW5lLmNyb3NzU3RhcnQgPSBzdGFydDtcblxuXHRcdFx0c3RhcnQgKz0gbGluZS5jcm9zcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0YXJnZXQuYWxpZ25Db250ZW50ID09PSAnZmxleC1lbmQnKSB7XG5cdFx0c3RhcnQgPSB0YXJnZXQuY3Jvc3NTcGFjZTtcblxuXHRcdHRhcmdldC5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdFx0XHRsaW5lLmNyb3NzU3RhcnQgPSBzdGFydDtcblxuXHRcdFx0c3RhcnQgKz0gbGluZS5jcm9zcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0YXJnZXQuYWxpZ25Db250ZW50ID09PSAnY2VudGVyJykge1xuXHRcdHN0YXJ0ID0gdGFyZ2V0LmNyb3NzU3BhY2UgLyAyO1xuXG5cdFx0dGFyZ2V0LmxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcblx0XHRcdGxpbmUuY3Jvc3NTdGFydCA9IHN0YXJ0O1xuXG5cdFx0XHRzdGFydCArPSBsaW5lLmNyb3NzO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHRhcmdldC5hbGlnbkNvbnRlbnQgPT09ICdzcGFjZS1iZXR3ZWVuJykge1xuXHRcdGZhY3RvciA9IHRhcmdldC5jcm9zc1NwYWNlIC8gKHRhcmdldC5saW5lcy5sZW5ndGggLSAxKTtcblx0XHRzdGFydCA9IDA7XG5cblx0XHR0YXJnZXQubGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuXHRcdFx0bGluZS5jcm9zc1N0YXJ0ID0gc3RhcnQ7XG5cblx0XHRcdHN0YXJ0ICs9IGxpbmUuY3Jvc3MgKyBmYWN0b3I7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodGFyZ2V0LmFsaWduQ29udGVudCA9PT0gJ3NwYWNlLWFyb3VuZCcpIHtcblx0XHRmYWN0b3IgPSB0YXJnZXQuY3Jvc3NTcGFjZSAqIDIgLyAodGFyZ2V0LmxpbmVzLmxlbmd0aCAqIDIpO1xuXHRcdHN0YXJ0ID0gZmFjdG9yIC8gMjtcblxuXHRcdHRhcmdldC5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdFx0XHRsaW5lLmNyb3NzU3RhcnQgPSBzdGFydDtcblxuXHRcdFx0c3RhcnQgKz0gbGluZS5jcm9zcyArIGZhY3Rvcjtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0YXJnZXQuYWxpZ25Db250ZW50ID09PSAnc3RyZXRjaCcpIHtcblx0XHRmYWN0b3IgPSB0YXJnZXQuY3Jvc3NTcGFjZSAvIHRhcmdldC5saW5lcy5sZW5ndGg7XG5cdFx0c3RhcnQgPSAwO1xuXG5cdFx0dGFyZ2V0LmxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcblx0XHRcdGxpbmUuY3Jvc3NTdGFydCA9IHN0YXJ0O1xuXHRcdFx0bGluZS5jcm9zcyArPSBmYWN0b3I7XG5cblx0XHRcdHN0YXJ0ICs9IGxpbmUuY3Jvc3M7XG5cdFx0fSk7XG5cdH1cbn07XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbGlnbkl0ZW1zKHRhcmdldCkge1xuXHR0YXJnZXQubGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuXHRcdGxpbmUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHRcdGlmIChjaGlsZC5hbGlnblNlbGYgPT09ICdmbGV4LXN0YXJ0Jykge1xuXHRcdFx0XHRjaGlsZC5jcm9zc1N0YXJ0ID0gbGluZS5jcm9zc1N0YXJ0O1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZC5hbGlnblNlbGYgPT09ICdmbGV4LWVuZCcpIHtcblx0XHRcdFx0Y2hpbGQuY3Jvc3NTdGFydCA9IGxpbmUuY3Jvc3NTdGFydCArIGxpbmUuY3Jvc3MgLSBjaGlsZC5jcm9zc0Fyb3VuZDtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGQuYWxpZ25TZWxmID09PSAnY2VudGVyJykge1xuXHRcdFx0XHRjaGlsZC5jcm9zc1N0YXJ0ID0gbGluZS5jcm9zc1N0YXJ0ICsgKGxpbmUuY3Jvc3MgLSBjaGlsZC5jcm9zc0Fyb3VuZCkgLyAyO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZC5hbGlnblNlbGYgPT09ICdzdHJldGNoJykge1xuXHRcdFx0XHRjaGlsZC5jcm9zc1N0YXJ0ID0gbGluZS5jcm9zc1N0YXJ0O1xuXHRcdFx0XHRjaGlsZC5jcm9zc0Fyb3VuZCA9IGxpbmUuY3Jvc3M7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxufSx7fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsZXhEaXJlY3Rpb24odGFyZ2V0LCB0YXJnZXRGbGV4RGlyZWN0aW9uLCB0YXJnZXRBbGlnbkl0ZW1zKSB7XG5cdHZhciBjbGllbnRSZWN0ID0gdGFyZ2V0Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0aWYgKHRhcmdldEZsZXhEaXJlY3Rpb24gPT09ICdyb3cnIHx8IHRhcmdldEZsZXhEaXJlY3Rpb24gPT09ICdyb3ctcmV2ZXJzZScpIHtcblx0XHR0YXJnZXQubWFpbkF4aXMgID0gJ2lubGluZSc7XG5cdFx0dGFyZ2V0LmNyb3NzQXhpcyA9ICdibG9jayc7XG5cblx0XHRpZiAodHlwZW9mIHRhcmdldC5tYWluID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGFyZ2V0LmNyb3NzID09PSAnbnVtYmVyJykge1xuXHRcdFx0aWYgKHRhcmdldC5mbGV4RGlyZWN0aW9uID09PSAncm93JyB8fCB0YXJnZXRGbGV4RGlyZWN0aW9uID09PSAncm93LXJldmVyc2UnKSB7XG5cdFx0XHRcdHRhcmdldC53aWR0aCAgPSB0YXJnZXQubWFpbjtcblx0XHRcdFx0dGFyZ2V0LmhlaWdodCA9IHRhcmdldC5jcm9zcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhcmdldC53aWR0aCAgPSB0YXJnZXQuY3Jvc3M7XG5cdFx0XHRcdHRhcmdldC5oZWlnaHQgPSB0YXJnZXQubWFpbjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0YXJnZXQubWFpbiAgPSB0YXJnZXQud2lkdGg7XG5cdFx0dGFyZ2V0LmNyb3NzID0gdGFyZ2V0LmhlaWdodDtcblxuXHRcdHRhcmdldC5tYWluQ2xpZW50ICA9IGNsaWVudFJlY3Qud2lkdGggIHx8IHRhcmdldC5ub2RlLm9mZnNldFdpZHRoO1xuXHRcdHRhcmdldC5jcm9zc0NsaWVudCA9IGNsaWVudFJlY3QuaGVpZ2h0IHx8IHRhcmdldC5ub2RlLm9mZnNldEhlaWdodDtcblxuXHRcdHRhcmdldC5tYWluQmVmb3JlICA9IHRhcmdldC5tYXJnaW5MZWZ0O1xuXHRcdHRhcmdldC5tYWluQWZ0ZXIgICA9IHRhcmdldC5tYXJnaW5SaWdodDtcblx0XHR0YXJnZXQuY3Jvc3NCZWZvcmUgPSB0YXJnZXQubWFyZ2luVG9wO1xuXHRcdHRhcmdldC5jcm9zc0FmdGVyICA9IHRhcmdldC5tYXJnaW5Cb3R0b207XG5cdH0gZWxzZSB7XG5cdFx0dGFyZ2V0Lm1haW5BeGlzICA9ICdibG9jayc7XG5cdFx0dGFyZ2V0LmNyb3NzQXhpcyA9ICdpbmxpbmUnO1xuXG5cdFx0dGFyZ2V0Lm1haW4gID0gdGFyZ2V0LmhlaWdodDtcblx0XHR0YXJnZXQuY3Jvc3MgPSB0YXJnZXQud2lkdGg7XG5cblx0XHRpZiAodHlwZW9mIHRhcmdldC5tYWluID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGFyZ2V0LmNyb3NzID09PSAnbnVtYmVyJykge1xuXHRcdFx0aWYgKHRhcmdldC5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uJyB8fCB0YXJnZXRGbGV4RGlyZWN0aW9uID09PSAnY29sdW1uLXJldmVyc2UnKSB7XG5cdFx0XHRcdHRhcmdldC53aWR0aCAgPSB0YXJnZXQuY3Jvc3M7XG5cdFx0XHRcdHRhcmdldC5oZWlnaHQgPSB0YXJnZXQubWFpbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhcmdldC53aWR0aCAgPSB0YXJnZXQubWFpbjtcblx0XHRcdFx0dGFyZ2V0LmhlaWdodCA9IHRhcmdldC5jcm9zcztcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0YXJnZXQubWFpbkNsaWVudCAgPSBjbGllbnRSZWN0LmhlaWdodCB8fCB0YXJnZXQubm9kZS5vZmZzZXRIZWlnaHQ7XG5cdFx0dGFyZ2V0LmNyb3NzQ2xpZW50ID0gY2xpZW50UmVjdC53aWR0aCAgfHwgdGFyZ2V0Lm5vZGUub2Zmc2V0V2lkdGg7XG5cblx0XHR0YXJnZXQubWFpbkJlZm9yZSAgPSB0YXJnZXQubWFyZ2luVG9wO1xuXHRcdHRhcmdldC5tYWluQWZ0ZXIgICA9IHRhcmdldC5tYXJnaW5Cb3R0b207XG5cdFx0dGFyZ2V0LmNyb3NzQmVmb3JlID0gdGFyZ2V0Lm1hcmdpbkxlZnQ7XG5cdFx0dGFyZ2V0LmNyb3NzQWZ0ZXIgID0gdGFyZ2V0Lm1hcmdpblJpZ2h0O1xuXHR9XG5cblx0aWYgKHR5cGVvZiB0YXJnZXQuZmxleEJhc2lzID09PSAnbnVtYmVyJykge1xuXHRcdHRhcmdldC5tYWluID0gdGFyZ2V0LmZsZXhCYXNpcztcblx0fVxuXG5cdGlmICh0YXJnZXQubWFpbiA9PT0gJ2F1dG8nKSB7XG5cdFx0dGFyZ2V0Lm1haW5Bcm91bmQgPSB0YXJnZXQubWFpbkNsaWVudDtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXQubWFpbkFyb3VuZCA9IHRhcmdldC5tYWluO1xuXHR9XG5cblx0aWYgKHRhcmdldC5jcm9zcyA9PT0gJ2F1dG8nKSB7XG5cdFx0dGFyZ2V0LmNyb3NzQXJvdW5kID0gdGFyZ2V0LmNyb3NzQ2xpZW50O1xuXHR9IGVsc2Uge1xuXHRcdHRhcmdldC5jcm9zc0Fyb3VuZCA9IHRhcmdldC5jcm9zcztcblx0fVxuXG5cdGlmICh0eXBlb2YgdGFyZ2V0Lm1haW5CZWZvcmUgPT09ICdudW1iZXInKSB7XG5cdFx0dGFyZ2V0Lm1haW5Bcm91bmQgKz0gdGFyZ2V0Lm1haW5CZWZvcmU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHRhcmdldC5tYWluQWZ0ZXIgPT09ICdudW1iZXInKSB7XG5cdFx0dGFyZ2V0Lm1haW5Bcm91bmQgKz0gdGFyZ2V0Lm1haW5BZnRlcjtcblx0fVxuXG5cdGlmICh0eXBlb2YgdGFyZ2V0LmNyb3NzQmVmb3JlID09PSAnbnVtYmVyJykge1xuXHRcdHRhcmdldC5jcm9zc0Fyb3VuZCArPSB0YXJnZXQuY3Jvc3NCZWZvcmU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHRhcmdldC5jcm9zc0JlZm9yZSA9PT0gJ251bWJlcicpIHtcblx0XHR0YXJnZXQuY3Jvc3NBcm91bmQgKz0gdGFyZ2V0LmNyb3NzQmVmb3JlO1xuXHR9XG5cblx0aWYgKHRhcmdldC5hbGlnblNlbGYgPT09ICdhdXRvJykge1xuXHRcdHRhcmdldC5hbGlnblNlbGYgPSB0YXJnZXRBbGlnbkl0ZW1zO1xuXHR9XG59O1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxleEdyb3cobGluZSkge1xuXHRpZiAobGluZS5tYWluU3BhY2UgPiAwKSB7XG5cdFx0dmFyIGdyb3dGYWN0b3IgPSBsaW5lLmNoaWxkcmVuLnJlZHVjZShmdW5jdGlvbiAobGFzdEdyb3dGYWN0b3IsIGNoaWxkKSB7XG5cdFx0XHRyZXR1cm4gbGFzdEdyb3dGYWN0b3IgKyBjaGlsZC5mbGV4R3Jvdztcblx0XHR9LCAwKTtcblxuXHRcdGlmIChncm93RmFjdG9yID4gMCkge1xuXHRcdFx0bGluZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0XHRjaGlsZC5tYWluQXJvdW5kICs9IGNoaWxkLmZsZXhHcm93IC8gZ3Jvd0ZhY3RvciAqIGxpbmUubWFpblNwYWNlO1xuXHRcdFx0fSk7XG5cblx0XHRcdGxpbmUubWFpbiA9IGxpbmUuY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uIChtYWluLCBjaGlsZCkge1xuXHRcdFx0XHRyZXR1cm4gbWFpbiArIGNoaWxkLm1haW5Bcm91bmQ7XG5cdFx0XHR9LCAwKTtcblxuXHRcdFx0bGluZS5tYWluU3BhY2UgPSAwO1xuXHRcdH1cblx0fVxufTtcblxufSx7fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsZXhTaHJpbmsobGluZSkge1xuXHRpZiAobGluZS5tYWluU3BhY2UgPCAwKSB7XG5cdFx0dmFyIHNocmlua0ZhY3RvciA9IGxpbmUuY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uIChsYXN0U2hyaW5rRmFjdG9yLCBjaGlsZCkge1xuXHRcdFx0cmV0dXJuIGxhc3RTaHJpbmtGYWN0b3IgKyBjaGlsZC5mbGV4U2hyaW5rO1xuXHRcdH0sIDApO1xuXG5cdFx0aWYgKHNocmlua0ZhY3RvciA+IDApIHtcblx0XHRcdGxpbmUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHRcdFx0Y2hpbGQubWFpbkFyb3VuZCArPSBjaGlsZC5mbGV4U2hyaW5rIC8gc2hyaW5rRmFjdG9yICogbGluZS5tYWluU3BhY2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0bGluZS5tYWluID0gbGluZS5jaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24gKG1haW4sIGNoaWxkKSB7XG5cdFx0XHRcdHJldHVybiBtYWluICsgY2hpbGQubWFpbkFyb3VuZDtcblx0XHRcdH0sIDApO1xuXG5cdFx0XHRsaW5lLm1haW5TcGFjZSA9IDA7XG5cdFx0fVxuXHR9XG59O1xuXG59LHt9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxleGJveExpbmVzKHRhcmdldCkge1xuXHR2YXIgbGluZTtcblxuXHR0YXJnZXQubGluZXMgPSBbbGluZSA9IHtcblx0XHRtYWluOiAgMCxcblx0XHRjcm9zczogMCxcblx0XHRjaGlsZHJlbjogW11cblx0fV07XG5cblx0dGFyZ2V0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG5cdFx0aWYgKFxuXHRcdFx0dGFyZ2V0LmZsZXhXcmFwID09PSAnbm93cmFwJyB8fFxuXHRcdFx0bGluZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgfHxcblx0XHRcdHRhcmdldC5tYWluQXJvdW5kID49IGxpbmUubWFpbiArIGNoaWxkLm1haW5Bcm91bmRcblx0XHQpIHtcblx0XHRcdGxpbmUubWFpbiArPSBjaGlsZC5tYWluQXJvdW5kO1xuXHRcdFx0bGluZS5jcm9zcyA9IE1hdGgubWF4KGxpbmUuY3Jvc3MsIGNoaWxkLmNyb3NzQXJvdW5kKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmxpbmVzLnB1c2gobGluZSA9IHtcblx0XHRcdFx0bWFpbjogIGNoaWxkLm1haW5Bcm91bmQsXG5cdFx0XHRcdGNyb3NzOiBjaGlsZC5jcm9zc0Fyb3VuZCxcblx0XHRcdFx0Y2hpbGRyZW46IFtdXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRsaW5lLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9KTtcbn07XG5cbn0se31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmbGV4Ym94KHRhcmdldCkge1xuXHR0YXJnZXQuZGVzY2VuZGFudHMuZm9yRWFjaChmdW5jdGlvbiAoZGVzY2VuZGFudCkge1xuXHRcdG1vZHVsZS5leHBvcnRzKGRlc2NlbmRhbnQpO1xuXHR9KTtcblxuXHRpZiAodGFyZ2V0LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuXHRcdHRhcmdldC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0cmVxdWlyZSgnLi9mbGV4LWRpcmVjdGlvbicpKGNoaWxkLCB0YXJnZXQuZmxleERpcmVjdGlvbiwgdGFyZ2V0LmFsaWduSXRlbXMpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH1cblxuXHRyZXF1aXJlKCcuL29yZGVyJykodGFyZ2V0KTtcblx0cmVxdWlyZSgnLi9mbGV4LWRpcmVjdGlvbicpKHRhcmdldCwgdGFyZ2V0LmZsZXhEaXJlY3Rpb24sIHRhcmdldC5hbGlnbkl0ZW1zKTtcblx0cmVxdWlyZSgnLi9mbGV4Ym94LWxpbmVzJykodGFyZ2V0KTtcblxuXHRpZiAodGFyZ2V0Lm1haW4gPT09ICdhdXRvJykge1xuXHRcdHRhcmdldC5tYWluID0gTWF0aC5tYXgodGFyZ2V0Lm1haW5Bcm91bmQsIHRhcmdldC5saW5lcy5yZWR1Y2UoZnVuY3Rpb24gKG1haW4sIGxpbmUpIHtcblx0XHRcdHJldHVybiBNYXRoLm1heChtYWluLCBsaW5lLm1haW4pO1xuXHRcdH0sIDApKTtcblxuXHRcdGlmICh0YXJnZXQuZmxleERpcmVjdGlvbiA9PT0gJ3JvdycpIHtcblx0XHRcdHRhcmdldC5tYWluQXJvdW5kID0gdGFyZ2V0Lm1haW5DbGllbnQgKyB0YXJnZXQubWFpbkJlZm9yZSArIHRhcmdldC5tYWluQWZ0ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5tYWluQXJvdW5kID0gdGFyZ2V0Lm1haW4gKyB0YXJnZXQubWFpbkJlZm9yZSArIHRhcmdldC5tYWluQWZ0ZXI7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRhcmdldC5jcm9zcyA9PT0gJ2F1dG8nKSB7XG5cdFx0dGFyZ2V0LmNyb3NzID0gdGFyZ2V0LmxpbmVzLnJlZHVjZShmdW5jdGlvbiAoY3Jvc3MsIGxpbmUpIHtcblx0XHRcdHJldHVybiBjcm9zcyArIGxpbmUuY3Jvc3M7XG5cdFx0fSwgMCk7XG5cblx0XHRpZiAodGFyZ2V0LmZsZXhEaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG5cdFx0XHR0YXJnZXQuY3Jvc3NBcm91bmQgPSB0YXJnZXQuY3Jvc3NDbGllbnQgKyB0YXJnZXQuY3Jvc3NCZWZvcmUgKyB0YXJnZXQuY3Jvc3NBZnRlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmNyb3NzQXJvdW5kID0gdGFyZ2V0LmNyb3NzICsgdGFyZ2V0LmNyb3NzQmVmb3JlICsgdGFyZ2V0LmNyb3NzQWZ0ZXI7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LmNyb3NzU3BhY2UgPSB0YXJnZXQuY3Jvc3NBcm91bmQgLSB0YXJnZXQuY3Jvc3M7XG5cdH0gZWxzZSB7XG5cdFx0dGFyZ2V0LmNyb3NzU3BhY2UgPSB0YXJnZXQuY3Jvc3MgLSB0YXJnZXQubGluZXMucmVkdWNlKGZ1bmN0aW9uIChjcm9zcywgbGluZSkge1xuXHRcdFx0cmV0dXJuIGNyb3NzICsgbGluZS5jcm9zcztcblx0XHR9LCAwKTtcblx0fVxuXG5cdHJlcXVpcmUoJy4vYWxpZ24tY29udGVudCcpKHRhcmdldCk7XG5cblx0dGFyZ2V0LmxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcblx0XHRsaW5lLm1haW5TcGFjZSA9IHRhcmdldC5tYWluIC0gbGluZS5tYWluO1xuXG5cdFx0cmVxdWlyZSgnLi9mbGV4LWdyb3cnKShsaW5lKTtcblx0XHRyZXF1aXJlKCcuL2ZsZXgtc2hyaW5rJykobGluZSk7XG5cdFx0cmVxdWlyZSgnLi9tYXJnaW4tbWFpbicpKGxpbmUpO1xuXHRcdHJlcXVpcmUoJy4vbWFyZ2luLWNyb3NzJykobGluZSk7XG5cdFx0cmVxdWlyZSgnLi9qdXN0aWZ5LWNvbnRlbnQnKShsaW5lLCB0YXJnZXQuanVzdGlmeUNvbnRlbnQpO1xuXHR9KTtcblxuXHRyZXF1aXJlKCcuL2FsaWduLWl0ZW1zJykodGFyZ2V0KTtcblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxufSx7XCIuL2FsaWduLWNvbnRlbnRcIjoxLFwiLi9hbGlnbi1pdGVtc1wiOjIsXCIuL2ZsZXgtZGlyZWN0aW9uXCI6MyxcIi4vZmxleC1ncm93XCI6NCxcIi4vZmxleC1zaHJpbmtcIjo1LFwiLi9mbGV4Ym94LWxpbmVzXCI6NixcIi4vanVzdGlmeS1jb250ZW50XCI6OCxcIi4vbWFyZ2luLWNyb3NzXCI6OSxcIi4vbWFyZ2luLW1haW5cIjoxMCxcIi4vb3JkZXJcIjoxMX1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBqdXN0aWZ5Q29udGVudChsaW5lLCB0YXJnZXRKdXN0aWZ5Q29udGVudCkge1xuXHR2YXIgc3RhcnQ7XG5cdHZhciBmYWN0b3I7XG5cblx0aWYgKHRhcmdldEp1c3RpZnlDb250ZW50ID09PSAnZmxleC1zdGFydCcpIHtcblx0XHRzdGFydCA9IDA7XG5cblx0XHRsaW5lLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG5cdFx0XHRjaGlsZC5tYWluU3RhcnQgPSBzdGFydDtcblxuXHRcdFx0c3RhcnQgKz0gY2hpbGQubWFpbkFyb3VuZDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0YXJnZXRKdXN0aWZ5Q29udGVudCA9PT0gJ2ZsZXgtZW5kJykge1xuXHRcdHN0YXJ0ID0gbGluZS5tYWluU3BhY2U7XG5cblx0XHRsaW5lLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG5cdFx0XHRjaGlsZC5tYWluU3RhcnQgPSBzdGFydDtcblxuXHRcdFx0c3RhcnQgKz0gY2hpbGQubWFpbkFyb3VuZDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0YXJnZXRKdXN0aWZ5Q29udGVudCA9PT0gJ2NlbnRlcicpIHtcblx0XHRzdGFydCA9IGxpbmUubWFpblNwYWNlIC8gMjtcblxuXHRcdGxpbmUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHRcdGNoaWxkLm1haW5TdGFydCA9IHN0YXJ0O1xuXG5cdFx0XHRzdGFydCArPSBjaGlsZC5tYWluQXJvdW5kO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHRhcmdldEp1c3RpZnlDb250ZW50ID09PSAnc3BhY2UtYmV0d2VlbicpIHtcblx0XHRmYWN0b3IgPSBsaW5lLm1haW5TcGFjZSAvIChsaW5lLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuXG5cdFx0c3RhcnQgPSAwO1xuXG5cdFx0bGluZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0Y2hpbGQubWFpblN0YXJ0ID0gc3RhcnQ7XG5cblx0XHRcdHN0YXJ0ICs9IGNoaWxkLm1haW5Bcm91bmQgKyBmYWN0b3I7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodGFyZ2V0SnVzdGlmeUNvbnRlbnQgPT09ICdzcGFjZS1hcm91bmQnKSB7XG5cdFx0ZmFjdG9yID0gbGluZS5tYWluU3BhY2UgKiAyIC8gKGxpbmUuY2hpbGRyZW4ubGVuZ3RoICogMik7XG5cdFx0c3RhcnQgPSBmYWN0b3IgLyAyO1xuXG5cdFx0bGluZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0Y2hpbGQubWFpblN0YXJ0ID0gc3RhcnQ7XG5cblx0XHRcdHN0YXJ0ICs9IGNoaWxkLm1haW5Bcm91bmQgKyBmYWN0b3I7XG5cdFx0fSk7XG5cdH1cbn07XG5cbn0se31dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXJnaW5Dcm9zcyhsaW5lKSB7XG5cdGxpbmUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHR2YXIgY291bnQgPSAwO1xuXG5cdFx0aWYgKGNoaWxkLmNyb3NzQmVmb3JlID09PSAnYXV0bycpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNoaWxkLmNyb3NzQWZ0ZXIgPT09ICdhdXRvJykge1xuXHRcdFx0Kytjb3VudDtcblx0XHR9XG5cblx0XHR2YXIgY2hpbGRTcGFjZSA9IGxpbmUuY3Jvc3MgLSBjaGlsZC5jcm9zc0Fyb3VuZDtcblxuXHRcdGlmIChjaGlsZC5jcm9zc0JlZm9yZSA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRjaGlsZC5jcm9zc0JlZm9yZSA9IGNoaWxkU3BhY2UgLyBjb3VudDtcblxuXHRcdFx0Y2hpbGQuY3Jvc3NBcm91bmQgKz0gY2hpbGQuY3Jvc3NCZWZvcmU7XG5cdFx0fVxuXG5cdFx0aWYgKGNoaWxkLmNyb3NzQWZ0ZXIgPT09ICdhdXRvJykge1xuXHRcdFx0Y2hpbGQuY3Jvc3NBZnRlciA9IGNoaWxkU3BhY2UgLyBjb3VudDtcblxuXHRcdFx0Y2hpbGQuY3Jvc3NBcm91bmQgKz0gY2hpbGQuY3Jvc3NBZnRlcjtcblx0XHR9XG5cdH0pO1xufTtcblxufSx7fV0sMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXJnaW5Dcm9zcyhsaW5lKSB7XG5cdHZhciBjb3VudCA9IDA7XG5cblx0bGluZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdGlmIChjaGlsZC5tYWluQmVmb3JlID09PSAnYXV0bycpIHtcblx0XHRcdCsrY291bnQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNoaWxkLm1haW5BZnRlciA9PT0gJ2F1dG8nKSB7XG5cdFx0XHQrK2NvdW50O1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKGNvdW50ID4gMCkge1xuXHRcdGxpbmUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcblx0XHRcdGlmIChjaGlsZC5tYWluQmVmb3JlID09PSAnYXV0bycpIHtcblx0XHRcdFx0Y2hpbGQubWFpbkJlZm9yZSA9IGxpbmUubWFpblNwYWNlIC8gY291bnQ7XG5cblx0XHRcdFx0Y2hpbGQubWFpbkFyb3VuZCArPSBjaGlsZC5tYWluQmVmb3JlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2hpbGQubWFpbkFmdGVyID09PSAnYXV0bycpIHtcblx0XHRcdFx0Y2hpbGQubWFpbkFmdGVyID0gbGluZS5tYWluU3BhY2UgLyBjb3VudDtcblxuXHRcdFx0XHRjaGlsZC5tYWluQXJvdW5kICs9IGNoaWxkLm1haW5BZnRlcjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGxpbmUubWFpblNwYWNlID0gMDtcblx0fVxufTtcblxufSx7fV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBvcmRlcih0YXJnZXQpIHtcblx0dGFyZ2V0LmNoaWxkcmVuLnNvcnQoZnVuY3Rpb24gKGNoaWxkQSwgY2hpbGRCKSB7XG5cdFx0cmV0dXJuIGNoaWxkQS5vcmRlciAtIGNoaWxkQi5vcmRlciB8fCBjaGlsZEEuaW5kZXggLSBjaGlsZEIuaW5kZXg7XG5cdH0pO1xufTtcblxufSx7fV0sMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRGbGV4U3R5bGVzKHRhcmdldCwgZGF0YSwgaXNGbGV4Q2hpbGQpIHtcblx0dmFyIHN0eWxlID0gT2JqZWN0LmFzc2lnbihkYXRhLCB7XG5cdFx0YWxpZ25Db250ZW50OiAnc3RyZXRjaCcsXG5cdFx0YWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuXHRcdGFsaWduU2VsZjogJ2F1dG8nLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUnLFxuXHRcdGZsZXhCYXNpczogJ2F1dG8nLFxuXHRcdGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuXHRcdGZsZXhHcm93OiAgIDAsXG5cdFx0ZmxleFNocmluazogMSxcblx0XHRmbGV4V3JhcDogJ25vd3JhcCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0Jyxcblx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHRtYXJnaW5Ub3A6ICAgIDAsXG5cdFx0bWFyZ2luUmlnaHQ6ICAwLFxuXHRcdG1hcmdpbkxlZnQ6ICAgMCxcblx0XHRtYXJnaW5Cb3R0b206IDAsXG5cdFx0bWF4SGVpZ2h0OiAnbm9uZScsXG5cdFx0bWF4V2lkdGg6ICdub25lJyxcblx0XHRtaW5IZWlnaHQ6IDAsXG5cdFx0bWluV2lkdGg6IDAsXG5cdFx0b3JkZXI6IDAsXG5cdFx0cG9zaXRpb246ICdzdGF0aWMnLFxuXHRcdHdpZHRoOiAnYXV0bydcblx0fSk7XG5cblx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3R5bGUnKSkge1xuXHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZScpKTtcblx0fSBlbHNlIHtcblx0XHR0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXN0eWxlJywgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJyk7XG5cdH1cblxuXHR2YXIgYXR0ciA9ICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0eWxlJykgfHwgJycpICsgJzsnICsgKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxleCcpIHx8ICcnKTtcblx0dmFyIHJlID0gLyhbXlxcczo7XSspXFxzKjpcXHMqKFteO10rPylcXHMqKDt8JCkvZztcblx0dmFyIGRlY2w7XG5cblx0d2hpbGUgKGRlY2wgPSByZS5leGVjKGF0dHIpKSB7XG5cdFx0dmFyIG5hbWUgPSBkZWNsWzFdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLVthLXpdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKDEpLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cblx0XHRzdHlsZVtuYW1lXSA9IHBhcnNlRmxvYXQoZGVjbFsyXSk7XG5cblx0XHRpZiAoaXNOYU4oc3R5bGVbbmFtZV0pKSB7XG5cdFx0XHRzdHlsZVtuYW1lXSA9IGRlY2xbMl07XG5cdFx0fVxuXHR9XG5cblx0aWYgKGlzRmxleENoaWxkKSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmRpc3BsYXkgID0gJ2lubGluZS1ibG9jayc7XG5cdFx0dGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0fVxuXG5cdHZhciByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdHN0eWxlLmNsaWVudFdpZHRoICA9IHJlY3Qud2lkdGggfHwgdGFyZ2V0Lm9mZnNldFdpZHRoO1xuXHRzdHlsZS5jbGllbnRIZWlnaHQgPSByZWN0LmhlaWdodCB8fCB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuXG5cdHJldHVybiBzdHlsZTtcbn07XG5cbn0se31dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qISBGbGV4aWJpbGl0eSAyLjAuMCB8IE1JVCBMaWNlbnNlZCB8IGdpdGh1Yi5jb20vMTB1cC9mbGV4aWJpbGl0eSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsZXhpYmlsaXR5KHRhcmdldCkge1xuXHR2YXIgZGF0YTEgPSBtb2R1bGUuZXhwb3J0cy53YWxrKHRhcmdldCk7XG5cblx0dmFyIGRhdGEyID0gbW9kdWxlLmV4cG9ydHMuZmxleGJveChkYXRhMSk7XG5cblx0dmFyIGRhdGEzID0gbW9kdWxlLmV4cG9ydHMud3JpdGUoZGF0YTIpO1xuXG5cdHJldHVybiBkYXRhMztcbn07XG5cbm1vZHVsZS5leHBvcnRzLmZsZXhib3ggPSByZXF1aXJlKCcuL2ZsZXhib3gnKTtcbm1vZHVsZS5leHBvcnRzLmdldEZsZXhTdHlsZXMgPSByZXF1aXJlKCcuL2dldEZsZXhTdHlsZXMnKTtcbm1vZHVsZS5leHBvcnRzLndhbGsgPSByZXF1aXJlKCcuL3dhbGsnKTtcbm1vZHVsZS5leHBvcnRzLndyaXRlID0gcmVxdWlyZSgnLi93cml0ZScpO1xuXG4vLyBtb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gcmVxdWlyZSgnLi9wcm9jZXNzJyk7XG4vLyBtb2R1bGUuZXhwb3J0cy5zdXBwb3J0ID0gcmVxdWlyZSgnLi9zdXBwb3J0Jyk7XG5cbn0se1wiLi9mbGV4Ym94XCI6NyxcIi4vZ2V0RmxleFN0eWxlc1wiOjEyLFwiLi93YWxrXCI6MTQsXCIuL3dyaXRlXCI6MTV9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2V0RmxleFN0eWxlcyA9IHJlcXVpcmUoJy4uL2dldEZsZXhTdHlsZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3YWxrKHRhcmdldCwgYW5jZXN0b3JEYXRhLCBpc0ZsZXhDaGlsZCkge1xuXHR2YXIgZmxleENvbnRhaW5lclJFID0gLyhefDspXFxzKmRpc3BsYXlcXHMqOlxccyooaW5saW5lLSk/ZmxleFxccyooO3wkKS9pO1xuXHR2YXIgaXNGbGV4Q29udGFpbmVyID0gZmxleENvbnRhaW5lclJFLnRlc3QodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1mbGV4JykpO1xuXHR2YXIgZGF0YSA9IHtcblx0XHRub2RlOiB0YXJnZXQsXG5cdFx0Y2hpbGRyZW46IFtdLFxuXHRcdGRlc2NlbmRhbnRzOiBbXVxuXHR9O1xuXG5cdGlmIChpc0ZsZXhDb250YWluZXIpIHtcblx0XHRpZiAoYW5jZXN0b3JEYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGFuY2VzdG9yRGF0YS5kZXNjZW5kYW50cy5wdXNoKGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChpc0ZsZXhDb250YWluZXIgfHwgIWFuY2VzdG9yRGF0YSkge1xuXHRcdGFuY2VzdG9yRGF0YSA9IGRhdGE7XG5cdH1cblxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRhcmdldC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGROb2RlKSB7XG5cdFx0aWYgKGlzRmxleENvbnRhaW5lciAmJiBjaGlsZE5vZGUubm9kZVR5cGUgPT09IDMgJiYgY2hpbGROb2RlLm5vZGVWYWx1ZS50cmltKCkpIHtcblx0XHRcdHZhciBvbGROb2RlID0gY2hpbGROb2RlO1xuXG5cdFx0XHRjaGlsZE5vZGUgPSB0YXJnZXQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZsZXgtaXRlbScpLCBvbGROb2RlKTtcblxuXHRcdFx0Y2hpbGROb2RlLmFwcGVuZENoaWxkKG9sZE5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEpIHtcblx0XHRcdHZhciBjaGlsZERhdGEgPSBtb2R1bGUuZXhwb3J0cyhjaGlsZE5vZGUsIGFuY2VzdG9yRGF0YSwgaXNGbGV4Q29udGFpbmVyKTtcblxuXHRcdFx0aWYgKGlzRmxleENvbnRhaW5lcikge1xuXHRcdFx0XHRkYXRhLmNoaWxkcmVuLnB1c2goY2hpbGREYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGlmIChpc0ZsZXhDb250YWluZXIgfHwgaXNGbGV4Q2hpbGQpIHtcblx0XHRnZXRGbGV4U3R5bGVzKHRhcmdldCwgZGF0YSwgaXNGbGV4Q2hpbGQpO1xuXHR9XG5cblx0cmV0dXJuIGRhdGE7XG59O1xuXG59LHtcIi4uL2dldEZsZXhTdHlsZXNcIjoxMn1dLDE1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd3JpdGUodGFyZ2V0KSB7XG5cdHRhcmdldC5kZXNjZW5kYW50cy5maWx0ZXIoZnVuY3Rpb24gKGRlc2NlbmRhbnQpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmNoaWxkcmVuLmluZGV4T2YoZGVzY2VuZGFudCkgPT09IC0xO1xuXHR9KS5mb3JFYWNoKGZ1bmN0aW9uIChkZXNjZW5kYW50KSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMoZGVzY2VuZGFudCk7XG5cdH0pO1xuXG5cdGlmICghdGFyZ2V0LmRpc3BsYXkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgc3R5bGUgPSB0YXJnZXQubm9kZS5zdHlsZTtcblxuXHRpZiAoJ21haW5TdGFydCcgaW4gdGFyZ2V0KSB7XG5cdFx0c3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG5cdFx0aWYgKHRhcmdldC5tYWluQXhpcyA9PT0gJ2lubGluZScpIHtcblx0XHRcdHN0eWxlLmxlZnQgPSB0YXJnZXQubWFpblN0YXJ0ICArICdweCc7XG5cdFx0XHRzdHlsZS50b3AgID0gdGFyZ2V0LmNyb3NzU3RhcnQgKyAncHgnO1xuXG5cdFx0XHRzdHlsZS5tYXJnaW5Ub3AgICAgPSB0YXJnZXQuY3Jvc3NCZWZvcmUgKyAncHgnO1xuXHRcdFx0c3R5bGUubWFyZ2luUmlnaHQgID0gdGFyZ2V0Lm1haW5BZnRlciAgICsgJ3B4Jztcblx0XHRcdHN0eWxlLm1hcmdpbkJvdHRvbSA9IHRhcmdldC5jcm9zc0FmdGVyICArICdweCc7XG5cdFx0XHRzdHlsZS5tYXJnaW5MZWZ0ICAgPSB0YXJnZXQubWFpbkJlZm9yZSAgKyAncHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5sZWZ0ID0gdGFyZ2V0LmNyb3NzU3RhcnQgKyAncHgnO1xuXHRcdFx0c3R5bGUudG9wICA9IHRhcmdldC5tYWluU3RhcnQgICsgJ3B4JztcblxuXHRcdFx0c3R5bGUubWFyZ2luVG9wICAgID0gdGFyZ2V0Lm1haW5CZWZvcmUgICsgJ3B4Jztcblx0XHRcdHN0eWxlLm1hcmdpblJpZ2h0ICA9IHRhcmdldC5jcm9zc0FmdGVyICArICdweCc7XG5cdFx0XHRzdHlsZS5tYXJnaW5Cb3R0b20gPSB0YXJnZXQubWFpbkFmdGVyICAgKyAncHgnO1xuXHRcdFx0c3R5bGUubWFyZ2luTGVmdCAgID0gdGFyZ2V0LmNyb3NzQmVmb3JlICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0Lm1haW5BeGlzID09PSAnaW5saW5lJykge1xuXHRcdFx0c3R5bGUud2lkdGggID0gdGFyZ2V0Lm1haW5Bcm91bmQgIC0gdGFyZ2V0Lm1haW5CZWZvcmUgLSB0YXJnZXQubWFpbkFmdGVyICsgJ3B4Jztcblx0XHRcdHN0eWxlLmhlaWdodCA9IHRhcmdldC5jcm9zc0Fyb3VuZCAtIHRhcmdldC5jcm9zc0JlZm9yZSAtIHRhcmdldC5jcm9zc0FmdGVyICsgJ3B4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRhcmdldC5jcm9zcyA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRcdHN0eWxlLndpZHRoID0gdGFyZ2V0LmNyb3NzQ2xpZW50IC0gdGFyZ2V0LmNyb3NzQmVmb3JlIC0gdGFyZ2V0LmNyb3NzQWZ0ZXIgKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3R5bGUud2lkdGggPSB0YXJnZXQuY3Jvc3NBcm91bmQgLSB0YXJnZXQuY3Jvc3NCZWZvcmUgLSB0YXJnZXQuY3Jvc3NBZnRlciArICdweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0YXJnZXQubWFpbiA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRcdHN0eWxlLmhlaWdodCA9IHRhcmdldC5tYWluQ2xpZW50IC0gdGFyZ2V0Lm1haW5CZWZvcmUgLSB0YXJnZXQubWFpbkFmdGVyICsgJ3B4Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0eWxlLmhlaWdodCA9IHRhcmdldC5tYWluQXJvdW5kIC0gdGFyZ2V0Lm1haW5CZWZvcmUgLSB0YXJnZXQubWFpbkFmdGVyICsgJ3B4Jztcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKCFzdHlsZS5wb3NpdGlvbikge1xuXHRcdFx0c3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQubWFpbkF4aXMgPT09ICdpbmxpbmUnKSB7XG5cdFx0XHRzdHlsZS53aWR0aCA9IHRhcmdldC5tYWluQXJvdW5kIC0gdGFyZ2V0Lm1haW5CZWZvcmUgLSB0YXJnZXQubWFpbkFmdGVyICsgJ3B4Jztcblx0XHRcdHN0eWxlLmhlaWdodCA9IHRhcmdldC5jcm9zc0Fyb3VuZCAtIHRhcmdldC5jcm9zc0JlZm9yZSAtIHRhcmdldC5jcm9zc0FmdGVyICsgJ3B4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUud2lkdGggPSB0YXJnZXQuY3Jvc3NBcm91bmQgLSB0YXJnZXQuY3Jvc3NCZWZvcmUgLSB0YXJnZXQuY3Jvc3NBZnRlciArICdweCc7XG5cdFx0XHRzdHlsZS5oZWlnaHQgPSB0YXJnZXQubWFpbkFyb3VuZCAtIHRhcmdldC5tYWluQmVmb3JlIC0gdGFyZ2V0Lm1haW5BZnRlciArICdweCc7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRhcmdldC5jaGlsZHJlbikge1xuXHRcdHRhcmdldC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0bW9kdWxlLmV4cG9ydHMoY2hpbGQpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG59LHt9XX0se30sWzEzXSkoMTMpXG59KTtcbi8qISByZXNwb25zaXZlLW5hdi5qcyAxLjAuMzlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS92aWxqYW1pcy9yZXNwb25zaXZlLW5hdi5qc1xuICogaHR0cDovL3Jlc3BvbnNpdmUtbmF2LmNvbVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBAdmlsamFtaXNcbiAqIEF2YWlsYWJsZSB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbkNvcHlyaWdodCAoYykgMjAxMyBWaWxqYW1pIFNhbG1pbmVuLCBodHRwOi8vdmlsamFtaXMuY29tL1xuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZ2xvYmFsIEV2ZW50ICovXG4oZnVuY3Rpb24gKGRvY3VtZW50LCB3aW5kb3csIGluZGV4KSB7XG4gIC8vIEluZGV4IGlzIHVzZWQgdG8ga2VlcCBtdWx0aXBsZSBuYXZzIG9uIHRoZSBzYW1lIHBhZ2UgbmFtZXNwYWNlZFxuXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciByZXNwb25zaXZlTmF2ID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgY29tcHV0ZWQgPSAhIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlO1xuICAgIFxuICAgIC8qKlxuICAgICAqIGdldENvbXB1dGVkU3R5bGUgcG9seWZpbGwgZm9yIG9sZCBicm93c2Vyc1xuICAgICAqL1xuICAgIGlmICghY29tcHV0ZWQpIHtcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmdldFByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgdmFyIHJlID0gLyhcXC0oW2Etel0pezF9KS9nO1xuICAgICAgICAgIGlmIChwcm9wID09PSBcImZsb2F0XCIpIHtcbiAgICAgICAgICAgIHByb3AgPSBcInN0eWxlRmxvYXRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlLnRlc3QocHJvcCkpIHtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UocmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1syXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbC5jdXJyZW50U3R5bGVbcHJvcF0gPyBlbC5jdXJyZW50U3R5bGVbcHJvcF0gOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfVxuICAgIC8qIGV4cG9ydGVkIGFkZEV2ZW50LCByZW1vdmVFdmVudCwgZ2V0Q2hpbGRyZW4sIHNldEF0dHJpYnV0ZXMsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgZm9yRWFjaCAqL1xuICAgIFxuICAgIC8qKlxuICAgICAqIEFkZCBFdmVudFxuICAgICAqIGZuIGFyZyBjYW4gYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIHRoYW5rcyB0byBoYW5kbGVFdmVudFxuICAgICAqIHJlYWQgbW9yZSBhdDogaHR0cDovL3d3dy50aGVjc3NuaW5qYS5jb20vamF2YXNjcmlwdC9oYW5kbGVldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7ZWxlbWVudH0gIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtldmVudH0gICAgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSAgYnViYmxpbmdcbiAgICAgKi9cbiAgICB2YXIgYWRkRXZlbnQgPSBmdW5jdGlvbiAoZWwsIGV2dCwgZm4sIGJ1YmJsZSkge1xuICAgICAgICBpZiAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gZWwpIHtcbiAgICAgICAgICAvLyBCQk9TNiBkb2Vzbid0IHN1cHBvcnQgaGFuZGxlRXZlbnQsIGNhdGNoIGFuZCBwb2x5ZmlsbFxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZm4sIGJ1YmJsZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJvYmplY3RcIiAmJiBmbi5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBCaW5kIGZuIGFzIHRoaXMgYW5kIHNldCBmaXJzdCBhcmcgYXMgZXZlbnQgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm4uaGFuZGxlRXZlbnQuY2FsbChmbiwgZSk7XG4gICAgICAgICAgICAgIH0sIGJ1YmJsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcImF0dGFjaEV2ZW50XCIgaW4gZWwpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgY2FsbGJhY2sgaXMgYW4gb2JqZWN0IGFuZCBjb250YWlucyBoYW5kbGVFdmVudFxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwib2JqZWN0XCIgJiYgZm4uaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIGV2dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBCaW5kIGZuIGFzIHRoaXNcbiAgICAgICAgICAgICAgZm4uaGFuZGxlRXZlbnQuY2FsbChmbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgZXZ0LCBmbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnRcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIHtlbGVtZW50fSAgZWxlbWVudFxuICAgICAgICogQHBhcmFtICB7ZXZlbnR9ICAgIGV2ZW50XG4gICAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAgICAgICAqIEBwYXJhbSAge2Jvb2xlYW59ICBidWJibGluZ1xuICAgICAgICovXG4gICAgICByZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChlbCwgZXZ0LCBmbiwgYnViYmxlKSB7XG4gICAgICAgIGlmIChcInJlbW92ZUV2ZW50TGlzdGVuZXJcIiBpbiBlbCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgZm4sIGJ1YmJsZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJvYmplY3RcIiAmJiBmbi5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBmbi5oYW5kbGVFdmVudC5jYWxsKGZuLCBlKTtcbiAgICAgICAgICAgICAgfSwgYnViYmxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFwiZGV0YWNoRXZlbnRcIiBpbiBlbCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwib2JqZWN0XCIgJiYgZm4uaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgIGVsLmRldGFjaEV2ZW50KFwib25cIiArIGV2dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBmbi5oYW5kbGVFdmVudC5jYWxsKGZuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyBldnQsIGZuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgXG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgY2hpbGRyZW4gb2YgYW55IGVsZW1lbnRcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIHtlbGVtZW50fVxuICAgICAgICogQHJldHVybiB7YXJyYXl9IFJldHVybnMgbWF0Y2hpbmcgZWxlbWVudHMgaW4gYW4gYXJyYXlcbiAgICAgICAqL1xuICAgICAgZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5jaGlsZHJlbi5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIE5hdiBjb250YWluZXIgaGFzIG5vIGNvbnRhaW5pbmcgZWxlbWVudHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgYWxsIGNoaWxkcmVuIGluIGFycmF5XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYW5kIHN0b3JlIGluIGFycmF5IGlmIGNoaWxkICE9IFRleHROb2RlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmNoaWxkcmVuW2ldLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGUuY2hpbGRyZW5baV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICB9LFxuICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXQgb25jZVxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudFxuICAgICAgICogQHBhcmFtIHthdHRyc30gICBhdHRyc1xuICAgICAgICovXG4gICAgICBzZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGVsLCBhdHRycykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICBcbiAgICAgIC8qKlxuICAgICAgICogQWRkcyBhIGNsYXNzIHRvIGFueSBlbGVtZW50XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGNsYXNzXG4gICAgICAgKi9cbiAgICAgIGFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjbHMpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTmFtZS5pbmRleE9mKGNscykgIT09IDApIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbHM7XG4gICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgYSBjbGFzcyBmcm9tIGFueSBlbGVtZW50XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICB7ZWxlbWVudH0gZWxlbWVudFxuICAgICAgICogQHBhcmFtICB7c3RyaW5nfSAgY2xhc3NcbiAgICAgICAqL1xuICAgICAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNscykge1xuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihcXFxcc3xeKVwiICsgY2xzICsgXCIoXFxcXHN8JClcIik7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHJlZywgXCIgXCIpLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLFwiXCIpO1xuICAgICAgfSxcbiAgICBcbiAgICAgIC8qKlxuICAgICAgICogZm9yRWFjaCBtZXRob2QgdGhhdCBwYXNzZXMgYmFjayB0aGUgc3R1ZmYgd2UgbmVlZFxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge2FycmF5fSAgICBhcnJheVxuICAgICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKiBAcGFyYW0gIHtzY29wZX0gICAgc2NvcGVcbiAgICAgICAqL1xuICAgICAgZm9yRWFjaCA9IGZ1bmN0aW9uIChhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICB2YXIgbmF2LFxuICAgICAgb3B0cyxcbiAgICAgIG5hdlRvZ2dsZSxcbiAgICAgIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxcbiAgICAgIGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIGhhc0FuaW1GaW5pc2hlZCxcbiAgICAgIGlzTW9iaWxlLFxuICAgICAgbmF2T3BlbjtcblxuICAgIHZhciBSZXNwb25zaXZlTmF2ID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICBhbmltYXRlOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgLy8gQm9vbGVhbjogVXNlIENTUzMgdHJhbnNpdGlvbnMsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyODQsICAgICAgICAgICAgICAgICAgLy8gSW50ZWdlcjogU3BlZWQgb2YgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAgIGxhYmVsOiBcIk1lbnVcIiwgICAgICAgICAgICAgICAgICAgIC8vIFN0cmluZzogTGFiZWwgZm9yIHRoZSBuYXZpZ2F0aW9uIHRvZ2dsZVxuICAgICAgICAgIGluc2VydDogXCJiZWZvcmVcIiwgICAgICAgICAgICAgICAgIC8vIFN0cmluZzogSW5zZXJ0IHRoZSB0b2dnbGUgYmVmb3JlIG9yIGFmdGVyIHRoZSBuYXZpZ2F0aW9uXG4gICAgICAgICAgY3VzdG9tVG9nZ2xlOiBcIlwiLCAgICAgICAgICAgICAgICAgLy8gU2VsZWN0b3I6IFNwZWNpZnkgdGhlIElEIG9mIGEgY3VzdG9tIHRvZ2dsZVxuICAgICAgICAgIGNsb3NlT25OYXZDbGljazogZmFsc2UsICAgICAgICAgICAvLyBCb29sZWFuOiBDbG9zZSB0aGUgbmF2aWdhdGlvbiB3aGVuIG9uZSBvZiB0aGUgbGlua3MgYXJlIGNsaWNrZWRcbiAgICAgICAgICBvcGVuUG9zOiBcInJlbGF0aXZlXCIsICAgICAgICAgICAgICAvLyBTdHJpbmc6IFBvc2l0aW9uIG9mIHRoZSBvcGVuZWQgbmF2LCByZWxhdGl2ZSBvciBzdGF0aWNcbiAgICAgICAgICBuYXZDbGFzczogXCJuYXYtY29sbGFwc2VcIiwgICAgICAgICAvLyBTdHJpbmc6IERlZmF1bHQgQ1NTIGNsYXNzLiBJZiBjaGFuZ2VkLCB5b3UgbmVlZCB0byBlZGl0IHRoZSBDU1MgdG9vIVxuICAgICAgICAgIG5hdkFjdGl2ZUNsYXNzOiBcImpzLW5hdi1hY3RpdmVcIiwgIC8vIFN0cmluZzogQ2xhc3MgdGhhdCBpcyBhZGRlZCB0byA8aHRtbD4gZWxlbWVudCB3aGVuIG5hdiBpcyBhY3RpdmVcbiAgICAgICAgICBqc0NsYXNzOiBcImpzXCIsICAgICAgICAgICAgICAgICAgICAvLyBTdHJpbmc6ICdKUyBlbmFibGVkJyBjbGFzcyB3aGljaCBpcyBhZGRlZCB0byA8aHRtbD4gZWxlbWVudFxuICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCl7fSwgICAgICAgICAgICAgICAvLyBGdW5jdGlvbjogSW5pdCBjYWxsYmFja1xuICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCl7fSwgICAgICAgICAgICAgICAvLyBGdW5jdGlvbjogT3BlbiBjYWxsYmFja1xuICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpe30gICAgICAgICAgICAgICAvLyBGdW5jdGlvbjogQ2xvc2UgY2FsbGJhY2tcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVc2VyIGRlZmluZWQgb3B0aW9uc1xuICAgICAgICBmb3IgKGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGRzIFwianNcIiBjbGFzcyBmb3IgPGh0bWw+XG4gICAgICAgIGFkZENsYXNzKGh0bWxFbCwgdGhpcy5vcHRpb25zLmpzQ2xhc3MpO1xuXG4gICAgICAgIC8vIFdyYXBwZXJcbiAgICAgICAgdGhpcy53cmFwcGVyRWwgPSBlbC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICAgICAgICAvLyBUcnkgc2VsZWN0aW5nIElEIGZpcnN0XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLndyYXBwZXJFbCkpIHtcbiAgICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLndyYXBwZXJFbCk7XG5cbiAgICAgICAgLy8gSWYgZWxlbWVudCB3aXRoIGFuIElEIGRvZXNuJ3QgZXhpc3QsIHVzZSBxdWVyeVNlbGVjdG9yXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLndyYXBwZXJFbCkpIHtcbiAgICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMud3JhcHBlckVsKTtcblxuICAgICAgICAvLyBJZiBlbGVtZW50IGRvZXNuJ3QgZXhpc3RzLCBzdG9wIGhlcmUuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG5hdiBlbGVtZW50IHlvdSBhcmUgdHJ5aW5nIHRvIHNlbGVjdCBkb2Vzbid0IGV4aXN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5uZXIgd3JhcHBlclxuICAgICAgICB0aGlzLndyYXBwZXIuaW5uZXIgPSBnZXRDaGlsZHJlbih0aGlzLndyYXBwZXIpO1xuXG4gICAgICAgIC8vIEZvciBtaW5pZmljYXRpb25cbiAgICAgICAgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgbmF2ID0gdGhpcy53cmFwcGVyO1xuXG4gICAgICAgIC8vIEluaXRcbiAgICAgICAgdGhpcy5faW5pdCh0aGlzKTtcbiAgICAgIH07XG5cbiAgICBSZXNwb25zaXZlTmF2LnByb3RvdHlwZSA9IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBVbmF0dGFjaGVzIGV2ZW50cyBhbmQgcmVtb3ZlcyBhbnkgY2xhc3NlcyB0aGF0IHdlcmUgYWRkZWRcbiAgICAgICAqL1xuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdHlsZXMoKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobmF2LCBcImNsb3NlZFwiKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobmF2LCBcIm9wZW5lZFwiKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobmF2LCBvcHRzLm5hdkNsYXNzKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobmF2LCBvcHRzLm5hdkNsYXNzICsgXCItXCIgKyB0aGlzLmluZGV4KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaHRtbEVsLCBvcHRzLm5hdkFjdGl2ZUNsYXNzKTtcbiAgICAgICAgbmF2LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICBuYXYucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7XG5cbiAgICAgICAgcmVtb3ZlRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZUV2ZW50KHdpbmRvdywgXCJmb2N1c1wiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LmJvZHksIFwidG91Y2htb3ZlXCIsIHRoaXMsIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlRXZlbnQobmF2VG9nZ2xlLCBcInRvdWNoc3RhcnRcIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICByZW1vdmVFdmVudChuYXZUb2dnbGUsIFwidG91Y2hlbmRcIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICByZW1vdmVFdmVudChuYXZUb2dnbGUsIFwibW91c2V1cFwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZUV2ZW50KG5hdlRvZ2dsZSwgXCJrZXl1cFwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZUV2ZW50KG5hdlRvZ2dsZSwgXCJjbGlja1wiLCB0aGlzLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFvcHRzLmN1c3RvbVRvZ2dsZSkge1xuICAgICAgICAgIG5hdlRvZ2dsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hdlRvZ2dsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmF2VG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRvZ2dsZXMgdGhlIG5hdmlnYXRpb24gb3Blbi9jbG9zZVxuICAgICAgICovXG4gICAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhhc0FuaW1GaW5pc2hlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICghbmF2T3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbnMgdGhlIG5hdmlnYXRpb25cbiAgICAgICAqL1xuICAgICAgb3BlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIW5hdk9wZW4pIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyhuYXYsIFwiY2xvc2VkXCIpO1xuICAgICAgICAgIGFkZENsYXNzKG5hdiwgXCJvcGVuZWRcIik7XG4gICAgICAgICAgYWRkQ2xhc3MoaHRtbEVsLCBvcHRzLm5hdkFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICBhZGRDbGFzcyhuYXZUb2dnbGUsIFwiYWN0aXZlXCIpO1xuICAgICAgICAgIG5hdi5zdHlsZS5wb3NpdGlvbiA9IG9wdHMub3BlblBvcztcbiAgICAgICAgICBzZXRBdHRyaWJ1dGVzKG5hdiwge1wiYXJpYS1oaWRkZW5cIjogXCJmYWxzZVwifSk7XG4gICAgICAgICAgbmF2T3BlbiA9IHRydWU7XG4gICAgICAgICAgb3B0cy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvc2VzIHRoZSBuYXZpZ2F0aW9uXG4gICAgICAgKi9cbiAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChuYXZPcGVuKSB7XG4gICAgICAgICAgYWRkQ2xhc3MobmF2LCBcImNsb3NlZFwiKTtcbiAgICAgICAgICByZW1vdmVDbGFzcyhuYXYsIFwib3BlbmVkXCIpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGh0bWxFbCwgb3B0cy5uYXZBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MobmF2VG9nZ2xlLCBcImFjdGl2ZVwiKTtcbiAgICAgICAgICBzZXRBdHRyaWJ1dGVzKG5hdiwge1wiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJ9KTtcblxuICAgICAgICAgIC8vIElmIGFuaW1hdGlvbnMgYXJlIGVuYWJsZWQsIHdhaXQgdW50aWwgdGhleSBmaW5pc2hcbiAgICAgICAgICBpZiAob3B0cy5hbmltYXRlKSB7XG4gICAgICAgICAgICBoYXNBbmltRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBuYXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgIGhhc0FuaW1GaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICB9LCBvcHRzLnRyYW5zaXRpb24gKyAxMCk7XG5cbiAgICAgICAgICAvLyBBbmltYXRpb25zIGFyZW4ndCBlbmFibGVkLCB3ZSBjYW4gZG8gdGhlc2UgaW1tZWRpYXRlbHlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5hdk9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBvcHRzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzaXplIGlzIGNhbGxlZCBvbiB3aW5kb3cgcmVzaXplIGFuZCBvcmllbnRhdGlvbiBjaGFuZ2UuXG4gICAgICAgKiBJdCBpbml0aWFsaXplcyB0aGUgQ1NTIHN0eWxlcyBhbmQgaGVpZ2h0IGNhbGN1bGF0aW9ucy5cbiAgICAgICAqL1xuICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gUmVzaXplIHdhdGNoZXMgbmF2aWdhdGlvbiB0b2dnbGUncyBkaXNwbGF5IHN0YXRlXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuYXZUb2dnbGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpICE9PSBcIm5vbmVcIikge1xuXG4gICAgICAgICAgaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICAgIHNldEF0dHJpYnV0ZXMobmF2VG9nZ2xlLCB7XCJhcmlhLWhpZGRlblwiOiBcImZhbHNlXCJ9KTtcblxuICAgICAgICAgIC8vIElmIHRoZSBuYXZpZ2F0aW9uIGlzIGhpZGRlblxuICAgICAgICAgIGlmIChuYXYuY2xhc3NOYW1lLm1hdGNoKC8oXnxcXHMpY2xvc2VkKFxcc3wkKS8pKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKG5hdiwge1wiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJ9KTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZXMoKTtcbiAgICAgICAgICB0aGlzLl9jYWxjSGVpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgIHNldEF0dHJpYnV0ZXMobmF2VG9nZ2xlLCB7XCJhcmlhLWhpZGRlblwiOiBcInRydWVcIn0pO1xuICAgICAgICAgIHNldEF0dHJpYnV0ZXMobmF2LCB7XCJhcmlhLWhpZGRlblwiOiBcImZhbHNlXCJ9KTtcbiAgICAgICAgICBuYXYuc3R5bGUucG9zaXRpb24gPSBvcHRzLm9wZW5Qb3M7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlU3R5bGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGFrZXMgY2FyZSBvZiBhbGwgZXZlbiBoYW5kbGluZ1xuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICAgICAgICogQHJldHVybiB7dHlwZX0gcmV0dXJucyB0aGUgdHlwZSBvZiBldmVudCB0aGF0IHNob3VsZCBiZSB1c2VkXG4gICAgICAgKi9cbiAgICAgIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZXZ0ID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgICAgc3dpdGNoIChldnQudHlwZSkge1xuICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOlxuICAgICAgICAgIHRoaXMuX29uVG91Y2hTdGFydChldnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidG91Y2htb3ZlXCI6XG4gICAgICAgICAgdGhpcy5fb25Ub3VjaE1vdmUoZXZ0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInRvdWNoZW5kXCI6XG4gICAgICAgIGNhc2UgXCJtb3VzZXVwXCI6XG4gICAgICAgICAgdGhpcy5fb25Ub3VjaEVuZChldnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50RGVmYXVsdChldnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwia2V5dXBcIjpcbiAgICAgICAgICB0aGlzLl9vbktleVVwKGV2dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmb2N1c1wiOlxuICAgICAgICBjYXNlIFwicmVzaXplXCI6XG4gICAgICAgICAgdGhpcy5yZXNpemUoZXZ0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJbml0aWFsaXplcyB0aGUgd2lkZ2V0XG4gICAgICAgKi9cbiAgICAgIF9pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCsrO1xuXG4gICAgICAgIGFkZENsYXNzKG5hdiwgb3B0cy5uYXZDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzKG5hdiwgb3B0cy5uYXZDbGFzcyArIFwiLVwiICsgdGhpcy5pbmRleCk7XG4gICAgICAgIGFkZENsYXNzKG5hdiwgXCJjbG9zZWRcIik7XG4gICAgICAgIGhhc0FuaW1GaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIG5hdk9wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9jbG9zZU9uTmF2Q2xpY2soKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlVG9nZ2xlKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25zKCk7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9uIElFOCB0aGUgcmVzaXplIGV2ZW50IHRyaWdnZXJzIHRvbyBlYXJseSBmb3Igc29tZSByZWFzb25cbiAgICAgICAgICogc28gaXQncyBjYWxsZWQgaGVyZSBhZ2FpbiBvbiBpbml0IHRvIG1ha2Ugc3VyZSBhbGwgdGhlXG4gICAgICAgICAqIGNhbGN1bGF0ZWQgc3R5bGVzIGFyZSBjb3JyZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnJlc2l6ZSgpO1xuICAgICAgICB9LCAyMCk7XG5cbiAgICAgICAgYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJmb2N1c1wiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIGFkZEV2ZW50KGRvY3VtZW50LmJvZHksIFwidG91Y2htb3ZlXCIsIHRoaXMsIGZhbHNlKTtcbiAgICAgICAgYWRkRXZlbnQobmF2VG9nZ2xlLCBcInRvdWNoc3RhcnRcIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICBhZGRFdmVudChuYXZUb2dnbGUsIFwidG91Y2hlbmRcIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICBhZGRFdmVudChuYXZUb2dnbGUsIFwibW91c2V1cFwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIGFkZEV2ZW50KG5hdlRvZ2dsZSwgXCJrZXl1cFwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgIGFkZEV2ZW50KG5hdlRvZ2dsZSwgXCJjbGlja1wiLCB0aGlzLCBmYWxzZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXQgY2FsbGJhY2sgaGVyZVxuICAgICAgICAgKi9cbiAgICAgICAgb3B0cy5pbml0KCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgU3R5bGVzIHRvIHRoZSA8aGVhZD5cbiAgICAgICAqL1xuICAgICAgX2NyZWF0ZVN0eWxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXN0eWxlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgc3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlcyBzdHlsZXMgZnJvbSB0aGUgPGhlYWQ+XG4gICAgICAgKi9cbiAgICAgIF9yZW1vdmVTdHlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIE5hdmlnYXRpb24gVG9nZ2xlXG4gICAgICAgKi9cbiAgICAgIF9jcmVhdGVUb2dnbGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHRvZ2dsZSwgbGV0J3MgY3JlYXRlIG9uZVxuICAgICAgICBpZiAoIW9wdHMuY3VzdG9tVG9nZ2xlKSB7XG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgIHRvZ2dsZS5pbm5lckhUTUwgPSBvcHRzLmxhYmVsO1xuICAgICAgICAgIHNldEF0dHJpYnV0ZXModG9nZ2xlLCB7XG4gICAgICAgICAgICBcImhyZWZcIjogXCIjXCIsXG4gICAgICAgICAgICBcImNsYXNzXCI6IFwibmF2LXRvZ2dsZVwiXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBEZXRlcm1pbmUgd2hlcmUgdG8gaW5zZXJ0IHRoZSB0b2dnbGVcbiAgICAgICAgICBpZiAob3B0cy5pbnNlcnQgPT09IFwiYWZ0ZXJcIikge1xuICAgICAgICAgICAgbmF2LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRvZ2dsZSwgbmF2Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRvZ2dsZSwgbmF2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuYXZUb2dnbGUgPSB0b2dnbGU7XG5cbiAgICAgICAgLy8gVGhlcmUgaXMgYSB0b2dnbGUgYWxyZWFkeSwgbGV0J3MgdXNlIHRoYXQgb25lXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRvZ2dsZUVsID0gb3B0cy5jdXN0b21Ub2dnbGUucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9nZ2xlRWwpKSB7XG4gICAgICAgICAgICBuYXZUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2dnbGVFbCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvZ2dsZUVsKSkge1xuICAgICAgICAgICAgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b2dnbGVFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjdXN0b20gbmF2IHRvZ2dsZSB5b3UgYXJlIHRyeWluZyB0byBzZWxlY3QgZG9lc24ndCBleGlzdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvc2VzIHRoZSBuYXZpZ2F0aW9uIHdoZW4gYSBsaW5rIGluc2lkZSBpcyBjbGlja2VkLlxuICAgICAgICovXG4gICAgICBfY2xvc2VPbk5hdkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcHRzLmNsb3NlT25OYXZDbGljaykge1xuICAgICAgICAgIHZhciBsaW5rcyA9IG5hdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksXG4gICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICBmb3JFYWNoKGxpbmtzLCBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50KGxpbmtzW2ldLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByZXZlbnRzIHRoZSBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9wcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGlmIChlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgc3RyaWN0bHkgZm9yIG9sZCBJRVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBPbiB0b3VjaCBzdGFydCB3ZSBnZXQgdGhlIGxvY2F0aW9uIG9mIHRoZSB0b3VjaC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAgICAgICAqL1xuICAgICAgX29uVG91Y2hTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdGhpcy5zdGFydFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgdGhpcy50b3VjaEhhc01vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBtb3VzZXVwIGV2ZW50IGNvbXBsZXRlbHkgaGVyZSB0byBhdm9pZFxuICAgICAgICAgKiBkb3VibGUgdHJpZ2dlcmluZyB0aGUgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVFdmVudChuYXZUb2dnbGUsIFwibW91c2V1cFwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIHNjcm9sbGluZyBpbnN0ZWFkIG9mIHRhcHBpbmcuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9vblRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGUudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5zdGFydFgpID4gMTAgfHxcbiAgICAgICAgTWF0aC5hYnMoZS50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnN0YXJ0WSkgPiAxMCkge1xuICAgICAgICAgIHRoaXMudG91Y2hIYXNNb3ZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT24gdG91Y2ggZW5kIHRvZ2dsZSB0aGUgbmF2aWdhdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAgICAgICAqL1xuICAgICAgX29uVG91Y2hFbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuX3ByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaXNuJ3Qgc2Nyb2xsaW5nXG4gICAgICAgIGlmICghdGhpcy50b3VjaEhhc01vdmVkKSB7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgdHlwZSBpcyB0b3VjaFxuICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hlbmRcIikge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgIC8vIEV2ZW50IHR5cGUgd2FzIGNsaWNrLCBub3QgdG91Y2hcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGV2dCA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAgICAgICAvLyBJZiBpdCBpc24ndCBhIHJpZ2h0IGNsaWNrLCBkbyB0b2dnbGluZ1xuICAgICAgICAgICAgaWYgKCEoZXZ0LndoaWNoID09PSAzIHx8IGV2dC5idXR0b24gPT09IDIpKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZvciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LCB0b2dnbGUgdGhlIG5hdmlnYXRpb24gb24gRW50ZXJcbiAgICAgICAqIGtleXByZXNzIHRvby5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAgICAgICAqL1xuICAgICAgX29uS2V5VXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBldnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQWRkcyB0aGUgbmVlZGVkIENTUyB0cmFuc2l0aW9ucyBpZiBhbmltYXRpb25zIGFyZSBlbmFibGVkXG4gICAgICAgKi9cbiAgICAgIF90cmFuc2l0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob3B0cy5hbmltYXRlKSB7XG4gICAgICAgICAgdmFyIG9ialN0eWxlID0gbmF2LnN0eWxlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IFwibWF4LWhlaWdodCBcIiArIG9wdHMudHJhbnNpdGlvbiArIFwibXNcIjtcblxuICAgICAgICAgIG9ialN0eWxlLldlYmtpdFRyYW5zaXRpb24gPVxuICAgICAgICAgIG9ialN0eWxlLk1velRyYW5zaXRpb24gPVxuICAgICAgICAgIG9ialN0eWxlLk9UcmFuc2l0aW9uID1cbiAgICAgICAgICBvYmpTdHlsZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxjdWxhdGVzIHRoZSBoZWlnaHQgb2YgdGhlIG5hdmlnYXRpb24gYW5kIHRoZW4gY3JlYXRlc1xuICAgICAgICogc3R5bGVzIHdoaWNoIGFyZSBsYXRlciBhZGRlZCB0byB0aGUgcGFnZSA8aGVhZD5cbiAgICAgICAqL1xuICAgICAgX2NhbGNIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNhdmVkSGVpZ2h0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXYuaW5uZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBzYXZlZEhlaWdodCArPSBuYXYuaW5uZXJbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlubmVyU3R5bGVzID0gXCIuXCIgKyBvcHRzLmpzQ2xhc3MgKyBcIiAuXCIgKyBvcHRzLm5hdkNsYXNzICsgXCItXCIgKyB0aGlzLmluZGV4ICsgXCIub3BlbmVke21heC1oZWlnaHQ6XCIgKyBzYXZlZEhlaWdodCArIFwicHggIWltcG9ydGFudH0gLlwiICsgb3B0cy5qc0NsYXNzICsgXCIgLlwiICsgb3B0cy5uYXZDbGFzcyArIFwiLVwiICsgdGhpcy5pbmRleCArIFwiLm9wZW5lZC5kcm9wZG93bi1hY3RpdmUge21heC1oZWlnaHQ6OTk5OXB4ICFpbXBvcnRhbnR9XCI7XG5cbiAgICAgICAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGlubmVyU3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lclN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlubmVyU3R5bGVzID0gXCJcIjtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbmV3IFJlc3BvbnNpdmUgTmF2XG4gICAgICovXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zaXZlTmF2KGVsLCBvcHRpb25zKTtcblxuICB9O1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXNwb25zaXZlTmF2O1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5yZXNwb25zaXZlTmF2ID0gcmVzcG9uc2l2ZU5hdjtcbiAgfVxuXG59KGRvY3VtZW50LCB3aW5kb3csIDApKTsiXX0=