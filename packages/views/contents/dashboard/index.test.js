import React from "react";
import Dashboard from "./index"; 
import { shallow } from "enzyme";

describe('Dashboard', () => {
  it('should be truthy', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toBeTruthy();
  });
});
