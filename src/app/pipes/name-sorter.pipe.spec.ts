import { NameSorterPipe } from './name-sorter.pipe';

describe('NameSorterPipe', () => {
  it('create an instance', () => {
    const pipe = new NameSorterPipe();
    expect(pipe).toBeTruthy();
  });
});
