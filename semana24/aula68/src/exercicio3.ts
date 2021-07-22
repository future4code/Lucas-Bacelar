import { ListNode } from './exercicio1'

class Queue {
  public head!: ListNode | null
  public tail!: ListNode | null
  public length: number = 0

  constructor(node: ListNode | null = null) {
    if (node) {
      this.head = node
      this.tail = node
      this.length++
    }
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  enqueue(value: any): void {
    const node = new ListNode(value)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.length++
    } else if (this.tail) {
      this.tail.next = node
      this.tail = node
      this.length++
    }
  }

  dequeue(): any {
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

// const queue = new Queue()
// queue.enqueue(2)
// queue.enqueue(4)
// queue.enqueue(7)
// console.log('All elements')
// queue.print()
// console.log('Removed number ', queue.dequeue())
// queue.print()
