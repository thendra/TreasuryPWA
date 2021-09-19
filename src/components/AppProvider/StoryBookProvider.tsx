import React, { useEffect } from "react";
import {userInfo} from './AppProvider';

interface IStoryBookProvider {
  children: React.ReactNode | React.ReactNode[] | null;
}

const StoryBookProvider = ({ children }: IStoryBookProvider) => {
  useEffect(() => {
    userInfo({ user: '', isAuthenticated: true });
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default StoryBookProvider;
