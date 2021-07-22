import { ListNode } from './exercicio1'

class DoublyLinkedList {
  public head: ListNode | null = null
  public tail: ListNode | null = null

  constructor(node: ListNode | null = null) {
    if (node) {
      this.head = node
      this.tail = node
    }
  }

  appendToTail(value: any): void {
    const node = new ListNode(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else if (this.tail) {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
  }

  searchElement(value: any): any {
    let actualNode = this.head
    while (actualNode) {
      const nodeValue = actualNode.getData()
      if (nodeValue === value) {
        return nodeValue
      }
      actualNode = actualNode.next
    }
    return null
  }

  deleteElement(value: any): any {
    let actualNode = this.head
    while (actualNode) {
      const nodeValue = actualNode.getData()
      if (nodeValue === value) {
        const previousNode = actualNode.previous
        const nextNode = actualNode.next
        if (previousNode) {
          previousNode.next = actualNode.next
        }
        if (nextNode) {
          nextNode.previous = actualNode.previous
        }

        if (this.head) {
          if (this.head.getData() === actualNode.getData()) {
            this.head = this.head.next
          }
        }

        return nodeValue
      }
      actualNode = actualNode.next
    }
    return null
  }

  print(): void {
    let actualNode: ListNode | null = this.head
    while (actualNode) {
      console.log(actualNode.getData())
      actualNode = actualNode.next
    }
  }
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.appendToTail(2)
doublyLinkedList.appendToTail(3)
doublyLinkedList.appendToTail(4)
doublyLinkedList.appendToTail(5)
doublyLinkedList.deleteElement(2)
doublyLinkedList.print()
const searchedElem = doublyLinkedList.searchElement(4)
console.log('searched elem', searchedElem)
