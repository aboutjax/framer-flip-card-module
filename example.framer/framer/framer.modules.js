require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"flipCard":[function(require,module,exports){
exports.flipCard = function(front, back, perspective, flipCurve) {
  var container, perspectiveLayer;
  perspectiveLayer = new Layer({
    width: Screen.width,
    height: Screen.height,
    backgroundColor: "transparent"
  });
  perspectiveLayer.perspective = perspective;
  perspectiveLayer.center();
  container = new Layer({
    width: front.width,
    height: front.height,
    backgroundColor: "transparent",
    superLayer: perspectiveLayer
  });
  container.center();
  back.superLayer = container;
  front.superLayer = container;
  back.rotationY = 180;
  front.states.add({
    front: {
      opacity: 1
    },
    back: {
      opacity: 0
    }
  });
  front.states.animationOptions = {
    curve: flipCurve
  };
  front.states.switchInstant("front");
  back.states.add({
    front: {
      opacity: 0
    },
    back: {
      opacity: 1
    }
  });
  back.states.animationOptions = {
    curve: flipCurve
  };
  container.states.add({
    front: {
      rotationY: 0
    },
    back: {
      rotationY: 180
    }
  });
  container.states.animationOptions = {
    curve: flipCurve
  };
  container.states.switchInstant("front");
  return container.on(Events.Click, function() {
    this.states.next(["back", "front"]);
    return front.states.next(["back", "front"]);
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFja3lsZWUvRGVza3RvcC9mcmFtZXItZmxpcC1jYXJkLW1vZHVsZS9leGFtcGxlLmZyYW1lci9tb2R1bGVzL2ZsaXBDYXJkLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxXQUFkLEVBQTJCLFNBQTNCO0FBRWYsTUFBQTtFQUFBLGdCQUFBLEdBQXVCLElBQUEsS0FBQSxDQUNuQjtJQUFBLEtBQUEsRUFBTyxNQUFNLENBQUMsS0FBZDtJQUNBLE1BQUEsRUFBUSxNQUFNLENBQUMsTUFEZjtJQUVBLGVBQUEsRUFBaUIsYUFGakI7R0FEbUI7RUFJdkIsZ0JBQWdCLENBQUMsV0FBakIsR0FBK0I7RUFDL0IsZ0JBQWdCLENBQUMsTUFBakIsQ0FBQTtFQUVBLFNBQUEsR0FBZ0IsSUFBQSxLQUFBLENBQ1o7SUFBQSxLQUFBLEVBQU8sS0FBSyxDQUFDLEtBQWI7SUFDQSxNQUFBLEVBQVEsS0FBSyxDQUFDLE1BRGQ7SUFFQSxlQUFBLEVBQWlCLGFBRmpCO0lBR0EsVUFBQSxFQUFZLGdCQUhaO0dBRFk7RUFPaEIsU0FBUyxDQUFDLE1BQVYsQ0FBQTtFQUdBLElBQUksQ0FBQyxVQUFMLEdBQWtCO0VBQ2xCLEtBQUssQ0FBQyxVQUFOLEdBQW1CO0VBR25CLElBQUksQ0FBQyxTQUFMLEdBQWlCO0VBS2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBYixDQUNJO0lBQUEsS0FBQSxFQUFPO01BQUMsT0FBQSxFQUFTLENBQVY7S0FBUDtJQUNBLElBQUEsRUFBTTtNQUFDLE9BQUEsRUFBUyxDQUFWO0tBRE47R0FESjtFQUdBLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWIsR0FDSTtJQUFBLEtBQUEsRUFBTyxTQUFQOztFQUNKLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYixDQUEyQixPQUEzQjtFQUVBLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUNJO0lBQUEsS0FBQSxFQUFPO01BQUMsT0FBQSxFQUFTLENBQVY7S0FBUDtJQUNBLElBQUEsRUFBTTtNQUFDLE9BQUEsRUFBUyxDQUFWO0tBRE47R0FESjtFQUdBLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQVosR0FDSTtJQUFBLEtBQUEsRUFBTyxTQUFQOztFQUVKLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBakIsQ0FDSTtJQUFBLEtBQUEsRUFBTztNQUFDLFNBQUEsRUFBVyxDQUFaO0tBQVA7SUFDQSxJQUFBLEVBQU07TUFBQyxTQUFBLEVBQVcsR0FBWjtLQUROO0dBREo7RUFHQSxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFqQixHQUNJO0lBQUEsS0FBQSxFQUFPLFNBQVA7O0VBQ0osU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFqQixDQUErQixPQUEvQjtTQUNBLFNBQVMsQ0FBQyxFQUFWLENBQWEsTUFBTSxDQUFDLEtBQXBCLEVBQTJCLFNBQUE7SUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFaLENBQWlCLENBQUMsTUFBRCxFQUFRLE9BQVIsQ0FBakI7V0FDQSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQWIsQ0FBa0IsQ0FBQyxNQUFELEVBQVEsT0FBUixDQUFsQjtFQUZ1QixDQUEzQjtBQS9DZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnRzLmZsaXBDYXJkID0gKGZyb250LCBiYWNrLCBwZXJzcGVjdGl2ZSwgZmxpcEN1cnZlKSAtPlxuICAgICMgQ3JlYXRlIGEgbmV3IGNvbnRhaW5lciBsYXllclxuICAgIHBlcnNwZWN0aXZlTGF5ZXIgPSBuZXcgTGF5ZXJcbiAgICAgICAgd2lkdGg6IFNjcmVlbi53aWR0aFxuICAgICAgICBoZWlnaHQ6IFNjcmVlbi5oZWlnaHRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICBwZXJzcGVjdGl2ZUxheWVyLnBlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmVcbiAgICBwZXJzcGVjdGl2ZUxheWVyLmNlbnRlcigpXG5cbiAgICBjb250YWluZXIgPSBuZXcgTGF5ZXJcbiAgICAgICAgd2lkdGg6IGZyb250LndpZHRoXG4gICAgICAgIGhlaWdodDogZnJvbnQuaGVpZ2h0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIHN1cGVyTGF5ZXI6IHBlcnNwZWN0aXZlTGF5ZXJcblxuICAgICMgQ2VudGVyIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuY2VudGVyKClcblxuICAgICNTZXQgc3VwZXJMYXllciBmb3IgYm90aCBmcm9udCBhbmQgYmFjayBsYXllcnNcbiAgICBiYWNrLnN1cGVyTGF5ZXIgPSBjb250YWluZXJcbiAgICBmcm9udC5zdXBlckxheWVyID0gY29udGFpbmVyXG5cbiAgICAjIFJvdGF0ZSB0aGUgYmFjayBpbWFnZSBvbiBpbnRpYWxcbiAgICBiYWNrLnJvdGF0aW9uWSA9IDE4MFxuXG4gICAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICAjIFN0YXRlc1xuICAgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICAgZnJvbnQuc3RhdGVzLmFkZFxuICAgICAgICBmcm9udDoge29wYWNpdHk6IDF9XG4gICAgICAgIGJhY2s6IHtvcGFjaXR5OiAwfVxuICAgIGZyb250LnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cbiAgICAgICAgY3VydmU6IGZsaXBDdXJ2ZVxuICAgIGZyb250LnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwiZnJvbnRcIilcblxuICAgIGJhY2suc3RhdGVzLmFkZFxuICAgICAgICBmcm9udDoge29wYWNpdHk6IDB9XG4gICAgICAgIGJhY2s6IHtvcGFjaXR5OiAxfVxuICAgIGJhY2suc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICAgICAgICBjdXJ2ZTogZmxpcEN1cnZlXG5cbiAgICBjb250YWluZXIuc3RhdGVzLmFkZFxuICAgICAgICBmcm9udDoge3JvdGF0aW9uWTogMH1cbiAgICAgICAgYmFjazoge3JvdGF0aW9uWTogMTgwfVxuICAgIGNvbnRhaW5lci5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG4gICAgICAgIGN1cnZlOiBmbGlwQ3VydmVcbiAgICBjb250YWluZXIuc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJmcm9udFwiKVxuICAgIGNvbnRhaW5lci5vbiBFdmVudHMuQ2xpY2ssIC0+XG4gICAgICAgIHRoaXMuc3RhdGVzLm5leHQoW1wiYmFja1wiLFwiZnJvbnRcIl0pXG4gICAgICAgIGZyb250LnN0YXRlcy5uZXh0KFtcImJhY2tcIixcImZyb250XCJdKVxuIl19
