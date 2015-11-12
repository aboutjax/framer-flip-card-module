require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"flipCard":[function(require,module,exports){
exports.flipCard = function(front, back, perspective, flipCurve) {
  var container, perspectiveLayer;
  perspectiveLayer = new Layer({
    width: front.width + 100,
    height: front.height + 100,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFja3lsZWUvRGVza3RvcC9mcmFtZXItZmxpcC1jYXJkLW1vZHVsZS9leGFtcGxlLmZyYW1lci9tb2R1bGVzL2ZsaXBDYXJkLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxXQUFkLEVBQTJCLFNBQTNCO0FBRWYsTUFBQTtFQUFBLGdCQUFBLEdBQXVCLElBQUEsS0FBQSxDQUNuQjtJQUFBLEtBQUEsRUFBTyxLQUFLLENBQUMsS0FBTixHQUFjLEdBQXJCO0lBQ0EsTUFBQSxFQUFRLEtBQUssQ0FBQyxNQUFOLEdBQWUsR0FEdkI7SUFFQSxlQUFBLEVBQWlCLGFBRmpCO0dBRG1CO0VBSXZCLGdCQUFnQixDQUFDLFdBQWpCLEdBQStCO0VBQy9CLGdCQUFnQixDQUFDLE1BQWpCLENBQUE7RUFFQSxTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUNaO0lBQUEsS0FBQSxFQUFPLEtBQUssQ0FBQyxLQUFiO0lBQ0EsTUFBQSxFQUFRLEtBQUssQ0FBQyxNQURkO0lBRUEsZUFBQSxFQUFpQixhQUZqQjtJQUdBLFVBQUEsRUFBWSxnQkFIWjtHQURZO0VBT2hCLFNBQVMsQ0FBQyxNQUFWLENBQUE7RUFHQSxJQUFJLENBQUMsVUFBTCxHQUFrQjtFQUNsQixLQUFLLENBQUMsVUFBTixHQUFtQjtFQUduQixJQUFJLENBQUMsU0FBTCxHQUFpQjtFQUtqQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQWIsQ0FDSTtJQUFBLEtBQUEsRUFBTztNQUFDLE9BQUEsRUFBUyxDQUFWO0tBQVA7SUFDQSxJQUFBLEVBQU07TUFBQyxPQUFBLEVBQVMsQ0FBVjtLQUROO0dBREo7RUFHQSxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFiLEdBQ0k7SUFBQSxLQUFBLEVBQU8sU0FBUDs7RUFDSixLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWIsQ0FBMkIsT0FBM0I7RUFFQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FDSTtJQUFBLEtBQUEsRUFBTztNQUFDLE9BQUEsRUFBUyxDQUFWO0tBQVA7SUFDQSxJQUFBLEVBQU07TUFBQyxPQUFBLEVBQVMsQ0FBVjtLQUROO0dBREo7RUFHQSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFaLEdBQ0k7SUFBQSxLQUFBLEVBQU8sU0FBUDs7RUFFSixTQUFTLENBQUMsTUFBTSxDQUFDLEdBQWpCLENBQ0k7SUFBQSxLQUFBLEVBQU87TUFBQyxTQUFBLEVBQVcsQ0FBWjtLQUFQO0lBQ0EsSUFBQSxFQUFNO01BQUMsU0FBQSxFQUFXLEdBQVo7S0FETjtHQURKO0VBR0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBakIsR0FDSTtJQUFBLEtBQUEsRUFBTyxTQUFQOztFQUNKLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBakIsQ0FBK0IsT0FBL0I7U0FDQSxTQUFTLENBQUMsRUFBVixDQUFhLE1BQU0sQ0FBQyxLQUFwQixFQUEyQixTQUFBO0lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBWixDQUFpQixDQUFDLE1BQUQsRUFBUSxPQUFSLENBQWpCO1dBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFiLENBQWtCLENBQUMsTUFBRCxFQUFRLE9BQVIsQ0FBbEI7RUFGdUIsQ0FBM0I7QUEvQ2UiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0cy5mbGlwQ2FyZCA9IChmcm9udCwgYmFjaywgcGVyc3BlY3RpdmUsIGZsaXBDdXJ2ZSkgLT5cbiAgICAjIENyZWF0ZSBhIG5ldyBjb250YWluZXIgbGF5ZXJcbiAgICBwZXJzcGVjdGl2ZUxheWVyID0gbmV3IExheWVyXG4gICAgICAgIHdpZHRoOiBmcm9udC53aWR0aCArIDEwMFxuICAgICAgICBoZWlnaHQ6IGZyb250LmhlaWdodCArIDEwMFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgIHBlcnNwZWN0aXZlTGF5ZXIucGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZVxuICAgIHBlcnNwZWN0aXZlTGF5ZXIuY2VudGVyKClcbiAgICBcbiAgICBjb250YWluZXIgPSBuZXcgTGF5ZXJcbiAgICAgICAgd2lkdGg6IGZyb250LndpZHRoXG4gICAgICAgIGhlaWdodDogZnJvbnQuaGVpZ2h0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIHN1cGVyTGF5ZXI6IHBlcnNwZWN0aXZlTGF5ZXJcblxuICAgICMgQ2VudGVyIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuY2VudGVyKClcbiAgICBcbiAgICAjU2V0IHN1cGVyTGF5ZXIgZm9yIGJvdGggZnJvbnQgYW5kIGJhY2sgbGF5ZXJzXG4gICAgYmFjay5zdXBlckxheWVyID0gY29udGFpbmVyXG4gICAgZnJvbnQuc3VwZXJMYXllciA9IGNvbnRhaW5lclxuICAgIFxuICAgICMgUm90YXRlIHRoZSBiYWNrIGltYWdlIG9uIGludGlhbFxuICAgIGJhY2sucm90YXRpb25ZID0gMTgwXG4gICAgXG4gICAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICAjIFN0YXRlc1xuICAgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gICAgZnJvbnQuc3RhdGVzLmFkZFxuICAgICAgICBmcm9udDoge29wYWNpdHk6IDF9XG4gICAgICAgIGJhY2s6IHtvcGFjaXR5OiAwfVxuICAgIGZyb250LnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cbiAgICAgICAgY3VydmU6IGZsaXBDdXJ2ZVxuICAgIGZyb250LnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwiZnJvbnRcIilcbiAgICBcbiAgICBiYWNrLnN0YXRlcy5hZGRcbiAgICAgICAgZnJvbnQ6IHtvcGFjaXR5OiAwfVxuICAgICAgICBiYWNrOiB7b3BhY2l0eTogMX1cbiAgICBiYWNrLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cbiAgICAgICAgY3VydmU6IGZsaXBDdXJ2ZVxuICAgIFxuICAgIGNvbnRhaW5lci5zdGF0ZXMuYWRkXG4gICAgICAgIGZyb250OiB7cm90YXRpb25ZOiAwfVxuICAgICAgICBiYWNrOiB7cm90YXRpb25ZOiAxODB9XG4gICAgY29udGFpbmVyLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cbiAgICAgICAgY3VydmU6IGZsaXBDdXJ2ZVxuICAgIGNvbnRhaW5lci5zdGF0ZXMuc3dpdGNoSW5zdGFudChcImZyb250XCIpXG4gICAgY29udGFpbmVyLm9uIEV2ZW50cy5DbGljaywgLT5cbiAgICAgICAgdGhpcy5zdGF0ZXMubmV4dChbXCJiYWNrXCIsXCJmcm9udFwiXSlcbiAgICAgICAgZnJvbnQuc3RhdGVzLm5leHQoW1wiYmFja1wiLFwiZnJvbnRcIl0pIl19
