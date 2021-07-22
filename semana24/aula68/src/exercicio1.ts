export class ListNode {
  constructor(
    private elem: any,
    public next: ListNode | null = null,
    public previous: ListNode | null = null
  ) {}

  getData(): any {
    return this.elem
  }
}

class LinkedList {
  public head: ListNode | null = null
  public tail: ListNode | null = null

  constructor(node: ListNode | null) {
    if (node) {
      this.head = node
      this.tail = node
    }
  }

  push(value: any): void {
    const node = new ListNode(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else if (this.tail) {
      this.tail.next = node
      this.tail = node
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

// const linkedList = new LinkedList()
// linkedList.push(1)
// linkedList.push(3)
// linkedList.print()
