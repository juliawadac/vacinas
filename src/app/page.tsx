'use client';
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  Stack,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Syringe, Calendar, Info, BookOpen, ChevronRight } from 'lucide-react';

interface PageData {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const VaccineSite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages: Record<string, PageData> = {
    home: {
      title: 'Início',
      icon: <Syringe size={20} />,
      content: (
        <Stack spacing={4}>
          <Paper sx={{ bgcolor: 'success.main', color: 'white', borderRadius: 3, p: 4 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Informações sobre Vacinas
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              {'Proteja sua saúde e de sua família com informações confiáveis sobre vacinação'}
            </Typography>
          </Paper>

          <Stack spacing={2}>
            <Paper sx={{ p: 3, borderLeft: '6px solid #2e7d32' }}>
              <Typography variant="h6" fontWeight="bold">Calendários</Typography>
              <Typography>Consulte os calendários de vacinação para todas as faixas etárias</Typography>
            </Paper>
            <Paper sx={{ p: 3, borderLeft: '6px solid #f57c00' }}>
              <Typography variant="h6" fontWeight="bold">Tipos de Vacinas</Typography>
              <Typography>Conheça os diferentes tipos de vacinas e suas características</Typography>
            </Paper>
            <Paper sx={{ p: 3, borderLeft: '6px solid #2e7d32' }}>
              <Typography variant="h6" fontWeight="bold">Educação</Typography>
              <Typography>Aprenda sobre a importância da vacinação e tire suas dúvidas</Typography>
            </Paper>
          </Stack>

          <Paper sx={{ p: 4, bgcolor: 'orange.50' }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Por que vacinar?
            </Typography>
            <Typography paragraph>
              {'As vacinas são uma das formas mais eficazes de prevenção de doenças. Elas estimulam o sistema imunológico a produzir defesas contra vírus e bactérias específicos, protegendo você e toda a comunidade.'}
            </Typography>
            <Typography>
              {'A vacinação em dia é essencial para erradicar doenças, como aconteceu com a varíola, e controlar outras como sarampo, poliomielite e rubéola.'}
            </Typography>
          </Paper>
        </Stack>
      ),
    },
    calendarios: {
      title: 'Calendários de Vacinação',
      icon: <Calendar size={20} />,
      content: (
        <Stack spacing={4}>
          <Typography variant="h4" fontWeight="bold">Calendários de Vacinação</Typography>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="success.main" gutterBottom>
              <ChevronRight size={20} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Crianças (0-10 anos)
            </Typography>
            <Typography>Ao nascer – BCG, Hepatite B</Typography>
            <Typography>2 meses – Pentavalente, VIP, Rotavírus, Pneumocócica 10</Typography>
            <Typography>3 meses – Meningocócica C</Typography>
            <Typography>4 meses – Pentavalente, VIP, Rotavírus, Pneumocócica 10</Typography>
            <Typography>5 meses – Meningocócica C</Typography>
            <Typography>6 meses – Pentavalente, VIP</Typography>
            <Typography>9 meses – Febre Amarela</Typography>
            <Typography>12 meses – Tríplice Viral, Pneumocócica 10, Meningocócica C</Typography>
            <Typography>15 meses – DTP, VOP, Hepatite A, Tetra Viral</Typography>
            <Typography>4 anos – DTP, VOP, Febre Amarela, Varicela</Typography>
          </Paper>
        </Stack>
      ),
    },
    tipos: {
      title: 'Tipos de Vacinas',
      icon: <Info size={20} />,
      content: (
        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="bold">Tipos de Vacinas</Typography>
          <Paper sx={{ p: 3, borderLeft: '6px solid #2e7d32' }}>
            <Typography variant="h6">Vacinas Inativadas</Typography>
            <Typography>Exemplos: Hepatite A, Raiva, VIP, Influenza</Typography>
          </Paper>
          <Paper sx={{ p: 3, borderLeft: '6px solid #f57c00' }}>
            <Typography variant="h6">Vacinas Atenuadas</Typography>
            <Typography>Exemplos: Tríplice Viral, Varicela, Febre Amarela, BCG</Typography>
          </Paper>
          <Paper sx={{ p: 3, borderLeft: '6px solid #2e7d32' }}>
            <Typography variant="h6">Vacinas de Subunidades</Typography>
            <Typography>Exemplos: Hepatite B, HPV, Pneumocócica, Meningocócica</Typography>
          </Paper>
          <Paper sx={{ p: 3, borderLeft: '6px solid #f57c00' }}>
            <Typography variant="h6">Vacinas de Toxóides</Typography>
            <Typography>Exemplos: Tétano, Difteria</Typography>
          </Paper>
          <Paper sx={{ p: 3, borderLeft: '6px solid #2e7d32' }}>
            <Typography variant="h6">Vacinas de mRNA</Typography>
            <Typography>Exemplos: Pfizer, Moderna</Typography>
          </Paper>
          <Paper sx={{ p: 3, borderLeft: '6px solid #f57c00' }}>
            <Typography variant="h6">Vacinas de Vetor Viral</Typography>
            <Typography>Exemplos: AstraZeneca, Janssen</Typography>
          </Paper>
        </Stack>
      ),
    },
    educacao: {
      title: 'Educação e Informações',
      icon: <BookOpen size={20} />,
      content: (
        <Stack spacing={4}>
          <Typography variant="h4" fontWeight="bold">Educação e Informações</Typography>
          <Paper sx={{ p: 3, bgcolor: 'success.main', color: 'white' }}>
            <Typography variant="h6">Como as vacinas funcionam?</Typography>
            <Typography>
              {'As vacinas ensinam o sistema imunológico a reconhecer vírus e bactérias e criar memória imunológica.'}
            </Typography>
          </Paper>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="error">Mitos sobre vacinas</Typography>
            <Typography>❌ Vacinas causam autismo – Falso.</Typography>
            <Typography>❌ Imunidade natural é melhor – Falso.</Typography>
            <Typography>❌ Muitas vacinas sobrecarregam – Falso.</Typography>
          </Paper>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="success.main">Verdades sobre vacinas</Typography>
            <Typography>✅ Salvam vidas</Typography>
            <Typography>✅ São seguras</Typography>
            <Typography>✅ Protegem a comunidade</Typography>
          </Paper>
        </Stack>
      ),
    },
  };

  const navigation = [
    { id: 'home', ...pages.home },
    { id: 'calendarios', ...pages.calendarios },
    { id: 'tipos', ...pages.tipos },
    { id: 'educacao', ...pages.educacao },
  ];

  return (
    <Box display="flex" height="100vh" bgcolor="background.paper" color="text.primary">
      {/* Sidebar */}
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        variant="temporary"
        sx={{ display: { xs: 'block', lg: 'none' } }}
      >
        <Box width={240} role="presentation">
          <List>
            {navigation.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Sidebar Desktop */}
      <Box
        width={240}
        sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', borderRight: '1px solid #ddd' }}
      >
        <Box p={2} bgcolor="success.main" color="white">
          <Typography variant="h6" fontWeight="bold">VacinaInfo</Typography>
        </Box>
        <List>
          {navigation.map((item) => (
            <ListItemButton
              key={item.id}
              selected={currentPage === item.id}
              onClick={() => setCurrentPage(item.id)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
        <Box p={2}>
          <Paper sx={{ p: 2, bgcolor: 'orange.50' }}>
            <Typography variant="body2">
              <b>Importante:</b> Mantenha sua caderneta de vacinação sempre atualizada!
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Conteúdo principal */}
      <Box flex={1} display="flex" flexDirection="column">
        {/* Header */}
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }} elevation={1}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              sx={{ mr: 2, display: { lg: 'none' } }}
              onClick={() => setSidebarOpen(true)}
            >
              {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              {pages[currentPage].title}
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Conteúdo */}
        <Box flex={1} overflow="auto" p={3}>
          <Container maxWidth="md">{pages[currentPage].content}</Container>
        </Box>

        {/* Footer */}
        <Divider />
        <Box p={2} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © 2025 VacinaInfo - Informações baseadas no Programa Nacional de Imunizações (PNI)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VaccineSite;
