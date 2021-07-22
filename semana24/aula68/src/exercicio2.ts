import { ListNode } from './exercicio1'

class Stack {
  public head: ListNode | null = null
  private length: number = 0

  constructor(node: ListNode | null = null) {
    if (node) {
      this.head = node
      this.length++
    }
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  push(value: any): void {
    const node = new ListNode(value)
    if (!this.head) {
      this.head = node
      this.length++
    } else {
      node.next = this.head
      this.head = node
      this.length++
    }
  }

  pop(): any {
    if (!this.head) {
      return null
    } else {
      const value = this.head.getData()
      this.head = this.head.next
      this.length--
      return value
    }
  }

  print(): void {
    let actualNode: ListNode | null = this.head
    while (actualNode) {
      console.log(actualNode.getData())
      actualNode = actualNode.next
    }
  }
}

// const stack = new Stack()
// stack.push(2)
// stack.push(4)
// stack.push(7)
// console.log('All elements')
// stack.print()
// console.log('Removed number ', stack.pop())
// stack.print()
