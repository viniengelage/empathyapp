export interface IUserProps {
  id?: string;
  name: string;
  email: string;
  cellphone: string;
  birthday: string;
  role: string;
  free_time: number;
  points: number;
  genre: 'male' | 'female' | 'other';
  avatar: string;
  avatar_url: string;
}
