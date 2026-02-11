import { useState } from 'react'
import { Box, MenuItem, Select, useTheme } from '@mui/material';
import Quiz from './pages/Quiz';
import Statistics from './pages/Statistics';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QuizIcon from '@mui/icons-material/Quiz';
import AddchartIcon from '@mui/icons-material/Addchart';
import { useTranslation } from 'react-i18next';

function App() {

  const theme = useTheme();
  const { t, i18n } = useTranslation();


  const [page, setPage] = useState<'quiz' | 'stats'>('quiz');

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      width: '100vw',
      height: '100vh',
    }}>
      <Box sx={{
        position: 'absolute',
        top: 10,
        right: 10,
      }}>
        <Select value={i18n.language} onChange={(e) => setLanguage(e.target.value)}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="nl">Nederlands</MenuItem>
        </Select>
      </Box>

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
        <BottomNavigationAction label={t('quiz')} value={'quiz'} icon={<QuizIcon />} />
        <BottomNavigationAction label={t('stats')} value={'stats'} icon={<AddchartIcon />} />
      </BottomNavigation>

    </Box>
  )
}

export default App
