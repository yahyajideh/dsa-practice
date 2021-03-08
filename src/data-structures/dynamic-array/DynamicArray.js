export class DynamicArray {
  constructor(capacity = 1) {
    this.dynamicArray = new Array(capacity);
    this.capacity = capacity;
    this.endIndex = 0;
  }

  halfArrayCapacity() {
    const temp = new Array(this.capacity / 2);
    for (let i = 0; i < this.capacity; i++) {
      temp[i] = this.dynamicArray[i];
    }
    this.dynamicArray = temp;
    this.capacity /= 2;
  }

  /**
   * Doubles the size of the array once it reaches the current capacity
   * and copy over the elements from the old array to the new array
   */
  doubleArrayCapacity() {
    const temp = new Array(this.capacity * 2);
    for (let i = 0; i < this.capacity; i++) {
      temp[i] = this.dynamicArray[i];
    }
    this.dynamicArray = temp;
    this.capacity *= 2;
  }

  /**
   *
   * @param element - element to insert
   * @param {number} index - Specific index to add element
   */
  add(element, index = this.endIndex) {
    if (index < 0) {
      console.error('Index must not be negative.');
      return;
    }

    if (index == this.capacity || this.endIndex == this.capacity) {
      this.doubleArrayCapacity();
    }

    // If index not supplied, add at last index
    if (arguments.length == 1) {
      this.dynamicArray[this.endIndex++] = element;
    }

    // If index supplied, insert at specific index and shift elements to the right
    if (arguments.length == 2) {
      if (index < this.endIndex) {
        const temp = new Array(this.capacity);

        let pointer = 0;
        for (let i = 0; i <= this.endIndex; i++) {
          if (i == index) {
            temp[i] = element;
            continue;
          }
          temp[i] = this.dynamicArray[pointer];
          pointer++;
        }
        this.dynamicArray = temp;
        this.endIndex++;
      } else {
        console.error('Index out of bounds.');
      }
    }
  }

  /**
   * Overrides the element at the specified index
   * @param {*} element
   * @param {number} index
   */
  setAt(element, index) {
    if (index == this.capacity) {
      this.doubleArrayCapacity();
    }

    if (index < this.endIndex) {
      this.dynamicArray[index] = element;
    } else {
      console.error('Index out of bounds.');
    }
  }

  /**
   * Removes the last element of the array
   */
  pop() {
    if (this.endIndex >= 1) {
      this.endIndex--;
    }

    if (this.endIndex < this.capacity / 2) {
      this.halfArrayCapacity();
    }
  }

  /**
   * Removes the element at the specified index
   * @param {number} index
   */
  removeAt(index) {
    if (index < 0) {
      console.error('Index must not be negative.');
      return;
    }

    if (index >= this.endIndex) {
      console.error('Index out of bounds.');
      return;
    }

    const temp = [];
    let pointer = 0;
    for (let i = 0; i < this.endIndex; i++) {
      if (i == index) {
        continue;
      }
      temp[pointer] = this.dynamicArray[i];
      pointer++;
    }
    this.dynamicArray = temp;
    this.endIndex--;

    if (this.endIndex < this.capacity / 2) {
      this.halfArrayCapacity();
    }
  }

  /**
   *
   * @param {number} index - The specific index to get elements
   * @return {{element}} The element to at specified index
   */
  get(index) {
    if (index >= this.endIndex) {
      return null;
    }
    return this.dynamicArray[index];
  }

  /**
   * @return {number} The capacity of the array
   */
  getCapacity() {
    return this.capacity;
  }

  /**
   * @return {number} The current size of the array
   */
  getSize() {
    return this.endIndex;
  }

  /**
   * Prints a formatted string of the array elements
   */
  print() {
    let output = '[';
    for (let i = 0; i < this.endIndex; i++) {
      output += this.dynamicArray[i];
      i == this.endIndex - 1 ? (output += '') : (output += ', ');
    }
    output += ']';
    console.log(output);
    return output;
  }
}
