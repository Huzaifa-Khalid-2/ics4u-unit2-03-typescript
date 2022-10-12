/**
 * This class creates an integer stack
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-10-5
 */

class Stack {
  stackList: number[] = [];

  push(pushedNumber: number): void {
    // add a number to list
    this.stackList.push(pushedNumber);
  }

  showStack(): void {
    console.log(this.stackList);
  }
}
export = Stack;
