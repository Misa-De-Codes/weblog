import React from 'react'
import Profile from '../components/Profile';


const demoProfileData = {
  name: 'Musa Takami',
  role: 'Aspiring Full-Stack Developer',
  bio: 'Self-taught. Training to become top 1% backend dev. Fluent in despair, fluent in code.',
  avatarUrl: 'https://i.pravatar.cc/150?img=56', // demo avatar
  location: 'Shinjuku, Tokyo',
  skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Japanese (N4)'],
  contact: {
    email: 'musa@shadowpath.dev',
    github: 'https://github.com/musa-shadow',
    linkedin: 'https://linkedin.com/in/musa-shadow',
  },
};

function ProfilePage() {
  return (
    <Profile profile={demoProfileData} />
  )
}

export default ProfilePage