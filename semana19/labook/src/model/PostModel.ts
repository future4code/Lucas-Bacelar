export enum POST_TYPES {
  NORMAL = 'normal',
  EVENT = 'event',
}

export type post = {
  id: string
  photo: string
  description: string
  type: POST_TYPES
  createdAt: Date
  authorId: string
}

export type createPostInputDTO = {
  photo: any
  description: any
  type: any
  token: any
}

export type createPostOutputDTO = {
  message: string
}

export type createPostDbInsertDTO = {
  id: string
  photo: string
  description: string
  type: POST_TYPES
  author_id: string
}

export type searchPostInputDTO = {
  id: any
}

export type searchPostOutputDTO = {
  post: post
  message: string
}
