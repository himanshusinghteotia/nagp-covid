import { BoldTextPipe } from './bold-text.pipe';

describe('BoldTextPipe', () => {

  it('Check BoldTextPipe', () => {
    const pipe = new BoldTextPipe();
    expect(pipe.transform("himanshu")).toEqual('<b>HIMANSHU</b>')
  });

  it('create an instance', () => {
    const pipe = new BoldTextPipe();
    expect(pipe).toBeTruthy();
  });
});
