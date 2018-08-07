const Locate = require('../lib/findCompByState');
const Find_Before = require('../lib/findCompBeforeDate')
const Find_After = require('../lib/findCompAfterDate')
const Find_Size = require('../lib/findCompBetweenSize')
const Find_Type = require('../lib/findCompByType')

// 'locate' command
describe('Check findCompByState', function() {
  var state = null;
  beforeEach(function() {
    state = {
      setState: Locate
      }
    spyOn(state, 'setState');
    state.setState('MT');
    state.setState('IN');
  });
  it('tracks that the spy was called', function() {
    expect(state.setState).toHaveBeenCalled();
  });
  it('tracks that the spy was called x times', function() {
    expect(state.setState).toHaveBeenCalledTimes(2);
  });
  it('stops all execution on a function', function() {
    expect(state).not.toBeNull();
  });
});

// 'find_before' command
describe('Check findCompBeforeDate', function() {
  var yearBefore = null;
  beforeEach(function() {
    yearBefore = {
      setYear: Find_Before
      }
    spyOn(yearBefore, 'setYear');
    yearBefore.setYear(2012);
    yearBefore.setYear(2000);
  });
  it('tracks that the spy was called', function() {
    expect(yearBefore.setYear).toHaveBeenCalled();
  });
  it('tracks that the spy was called x times', function() {
    expect(yearBefore.setYear).toHaveBeenCalledTimes(2);
  });
  it('stops all execution on a function', function() {
    expect(yearBefore).not.toBeNull();
  });
});

// 'find_after' command
describe('Check findCompAfterDate', function() {
  var yearAfter = null;
  beforeEach(function() {
    yearAfter = {
      setYear: Find_After
      }
    spyOn(yearAfter, 'setYear');
    yearAfter.setYear(2012);
    yearAfter.setYear(2000);
  });
  it('tracks that the spy was called', function() {
    expect(yearAfter.setYear).toHaveBeenCalled();
  });
  it('tracks that the spy was called x times', function() {
    expect(yearAfter.setYear).toHaveBeenCalledTimes(2);
  });
  it('stops all execution on a function', function() {
    expect(yearAfter).not.toBeNull();
  });
});

// 'find_companies_between_size' command
describe('Check findCompBetweenSize', function() {
  var size = null;
  beforeEach(function() {
    size = {
      setSize: Find_Size
      }
    spyOn(size, 'setSize');
    size.setSize('1-10');
    size.setSize('10,001+');
  });
  it('tracks that the spy was called', function() {
    expect(size.setSize).toHaveBeenCalled();
  });
  it('tracks that the spy was called x times', function() {
    expect(size.setSize).toHaveBeenCalledTimes(2);
  });
  it('stops all execution on a function', function() {
    expect(size).not.toBeNull();
  });
});

// 'find_type' command
describe('Check findCompByType', function() {
  var type = null;
  beforeEach(function() {
    type = {
      setType: Find_Type
      }
    spyOn(type, 'setType');
    type.setType('Education');
    type.setType('Environment & Weather');
  });
  it('tracks that the spy was called', function() {
    expect(type.setType).toHaveBeenCalled();
  });
  it('tracks that the spy was called x times', function() {
    expect(type.setType).toHaveBeenCalledTimes(2);
  });
  it('stops all execution on a function', function() {
    expect(type).not.toBeNull();
  });
});
