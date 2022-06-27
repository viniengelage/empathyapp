export interface IChallengeProps {
  icon_url: string;
  id: string;
  title: string;
  description: string;
  content: string;
  earned_points: number;
  icon: string;
  level: number;
  see_more_url: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserChallengeProps {
  id: string;
  user_id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  challenge_id: string;
  challenge: IChallengeProps;
  is_completed: boolean;
}
