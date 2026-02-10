import { useState } from 'react'
import { Box, useTheme } from '@mui/material';
import Quiz from './pages/Quiz';
import Statistics from './pages/Statistics';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QuizIcon from '@mui/icons-material/Quiz';
import AddchartIcon from '@mui/icons-material/Addchart';

function App() {

  const theme = useTheme();

  const [page, setPage] = useState<'quiz' | 'stats'>('quiz');

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      width: '100vw',
      height: '100vh',
    }}>

      {
        page === 'quiz' && <Quiz />
      }

      {
        page === 'stats' && <Statistics />
      }

      <BottomNavigation
        value={page}
        onChange={(_, newPage) => {
          setPage(newPage);
        }}
        showLabels
        sx={{
          backgroundColor: theme.palette.background.default,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <BottomNavigationAction label="Quiz" value={'quiz'} icon={<QuizIcon />} />
        <BottomNavigationAction label="Statistics" value={'stats'} icon={<AddchartIcon />} />
      </BottomNavigation>

    </Box>
  )
}

export default App
