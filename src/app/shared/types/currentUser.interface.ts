export interface CurrentUserInterface {
  id: number,
  email: string,
  createdAt: string,
  updatedAt: string,
  image: string | null,
  bio: string | null
  token: string
}
