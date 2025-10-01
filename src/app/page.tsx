'use client';

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
              Proteja sua saúde e de sua família com informações confiáveis sobre vacinação
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
              As vacinas são uma das formas mais eficazes de prevenção de doenças. Elas estimulam o sistema imunológico a produzir defesas contra vírus e bactérias específicos, protegendo você e toda a comunidade.
            </Typography>
            <Typography>
              A vacinação em dia é essencial para erradicar doenças, como aconteceu com a varíola, e controlar outras como sarampo, poliomielite e rubéola.
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
            <Typography variant="h6" color="success.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ChevronRight size={20} />
              Crianças (0-10 anos)
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Typography>• Ao nascer – BCG, Hepatite B</Typography>
              <Typography>• 2 meses – Pentavalente, VIP, Rotavírus, Pneumocócica 10</Typography>
              <Typography>• 3 meses – Meningocócica C</Typography>
              <Typography>• 4 meses – Pentavalente, VIP, Rotavírus, Pneumocócica 10</Typography>
              <Typography>• 5 meses – Meningocócica C</Typography>
              <Typography>• 6 meses – Pentavalente, VIP</Typography>
              <Typography>• 9 meses – Febre Amarela</Typography>
              <Typography>• 12 meses – Tríplice Viral, Pneumocócica 10, Meningocócica C</Typography>
              <Typography>• 15 meses – DTP, VOP, Hepatite A, Tetra Viral</Typography>
              <Typography>• 4 anos – DTP, VOP, Febre Amarela, Varicela</Typography>
            </Stack>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="warning.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ChevronRight size={20} />
              Adolescentes (11-19 anos)
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">HPV</Typography>
                <Typography>2 doses (0 e 6 meses) - 9 a 14 anos</Typography>
              </Box>
              <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">Meningocócica ACWY</Typography>
                <Typography>Dose única ou reforço - 11 a 12 anos</Typography>
              </Box>
              <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">Tríplice Viral</Typography>
                <Typography>2 doses (se não vacinado anteriormente)</Typography>
              </Box>
              <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">dTpa</Typography>
                <Typography>Reforço a cada 10 anos</Typography>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" color="success.main" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ChevronRight size={20} />
              Adultos e Idosos
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">Influenza (Gripe)</Typography>
                <Typography>Anual - todas as idades</Typography>
              </Box>
              <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">Pneumocócica</Typography>
                <Typography>A partir de 60 anos</Typography>
              </Box>
              <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">Herpes Zóster</Typography>
                <Typography>A partir de 50 anos (rede privada)</Typography>
              </Box>
              <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1 }}>
                <Typography fontWeight="bold">dTpa</Typography>
                <Typography>Reforço a cada 10 anos</Typography>
              </Box>
            </Stack>
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
            <Typography variant="h6" fontWeight="bold" gutterBottom>Vacinas Inativadas</Typography>
            <Typography paragraph>
              Contêm vírus ou bactérias mortos que não podem causar doença. O sistema imunológico reconhece o agente inativado e produz anticorpos.
            </Typography>
            <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1 }}>
              <Typography fontWeight="bold">Exemplos:</Typography>
              <Typography>Hepatite A, Raiva, Poliomielite injetável (VIP), Influenza</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, borderLeft: '6px solid #f57c00' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Vacinas Atenuadas</Typography>
            <Typography paragraph>
              Contêm vírus ou bactérias vivos, mas enfraquecidos. Eles se multiplicam no organismo, mas não causam a doença em pessoas saudáveis.
            </Typography>
            <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1 }}>
              <Typography fontWeight="bold">Exemplos:</Typography>
              <Typography>Tríplice Viral (sarampo, caxumba, rubéola), Varicela, Febre Amarela, BCG</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, borderLeft: '6px solid #2e7d32' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Vacinas de Subunidades</Typography>
            <Typography paragraph>
              Utilizam apenas partes específicas do vírus ou bactéria (proteínas ou açúcares) para estimular a resposta imunológica.
            </Typography>
            <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1 }}>
              <Typography fontWeight="bold">Exemplos:</Typography>
              <Typography>Hepatite B, HPV, Pneumocócica, Meningocócica</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, borderLeft: '6px solid #f57c00' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Vacinas de Toxóides</Typography>
            <Typography paragraph>
              Utilizam toxinas inativadas produzidas por bactérias. O sistema imunológico aprende a neutralizar essas toxinas.
            </Typography>
            <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1 }}>
              <Typography fontWeight="bold">Exemplos:</Typography>
              <Typography>Tétano, Difteria (componentes da DTP e dTpa)</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, borderLeft: '6px solid #2e7d32' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Vacinas de mRNA</Typography>
            <Typography paragraph>
              Tecnologia mais recente que ensina as células a produzir uma proteína que desencadeia a resposta imunológica.
            </Typography>
            <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1 }}>
              <Typography fontWeight="bold">Exemplos:</Typography>
              <Typography>Algumas vacinas contra COVID-19 (Pfizer, Moderna)</Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3, borderLeft: '6px solid #f57c00' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Vacinas de Vetor Viral</Typography>
            <Typography paragraph>
              Utilizam um vírus modificado (que não causa doença) para transportar material genético do agente que queremos combater.
            </Typography>
            <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1 }}>
              <Typography fontWeight="bold">Exemplos:</Typography>
              <Typography>Algumas vacinas contra COVID-19 (AstraZeneca, Janssen)</Typography>
            </Box>
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
          
          <Paper sx={{ p: 4, bgcolor: 'success.main', color: 'white', borderRadius: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Como as vacinas funcionam?
            </Typography>
            <Typography variant="body1">
              As vacinas ensinam o sistema imunológico a reconhecer e combater vírus e bactérias específicos. Quando você é vacinado, seu corpo cria uma memória imunológica que permite uma resposta rápida e eficaz caso entre em contato com a doença real.
            </Typography>
          </Paper>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" color="error" fontWeight="bold" gutterBottom>
                Mitos sobre vacinas
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography fontWeight="bold">❌ Vacinas causam autismo</Typography>
                  <Typography color="text.secondary">
                    Falso. Estudos científicos extensos comprovaram que não há relação entre vacinas e autismo.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">❌ Imunidade natural é melhor</Typography>
                  <Typography color="text.secondary">
                    Falso. Algumas doenças podem causar complicações graves ou morte. As vacinas oferecem proteção sem os riscos.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">❌ Muitas vacinas sobrecarregam o sistema imunológico</Typography>
                  <Typography color="text.secondary">
                    Falso. O sistema imunológico pode lidar com múltiplas vacinas simultaneamente com segurança.
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" color="success.main" fontWeight="bold" gutterBottom>
                Verdades sobre vacinas
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography fontWeight="bold">✅ Vacinas salvam vidas</Typography>
                  <Typography color="text.secondary">
                    As vacinas previnem de 2 a 3 milhões de mortes por ano globalmente.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">✅ São seguras e eficazes</Typography>
                  <Typography color="text.secondary">
                    Passam por rigorosos testes antes de serem aprovadas e são continuamente monitoradas.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">✅ Protegem a comunidade</Typography>
                  <Typography color="text.secondary">
                    A imunidade coletiva protege pessoas que não podem ser vacinadas por razões médicas.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Stack>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Efeitos colaterais comuns
            </Typography>
            <Typography paragraph>
              A maioria dos efeitos colaterais das vacinas é leve e temporária. Eles são sinais de que o corpo está construindo proteção:
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1, flex: 1 }}>
                <Typography fontWeight="bold" gutterBottom>Locais</Typography>
                <Typography>• Dor no local</Typography>
                <Typography>• Vermelhidão</Typography>
                <Typography>• Inchaço</Typography>
              </Box>
              <Box sx={{ bgcolor: 'orange.50', p: 2, borderRadius: 1, flex: 1 }}>
                <Typography fontWeight="bold" gutterBottom>Sistêmicos</Typography>
                <Typography>• Febre baixa</Typography>
                <Typography>• Fadiga</Typography>
                <Typography>• Dor de cabeça</Typography>
              </Box>
              <Box sx={{ bgcolor: 'green.50', p: 2, borderRadius: 1, flex: 1 }}>
                <Typography fontWeight="bold" gutterBottom>Duração</Typography>
                <Typography>• 1-2 dias</Typography>
                <Typography>• Leves</Typography>
                <Typography>• Temporários</Typography>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ p: 3, bgcolor: 'orange.50' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Perguntas Frequentes
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography fontWeight="bold">Posso tomar várias vacinas no mesmo dia?</Typography>
                <Typography>Sim, é seguro e recomendado. Isso reduz o número de visitas ao posto de saúde.</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold">Preciso vacinar se já tive a doença?</Typography>
                <Typography>Depende da doença. Consulte um profissional de saúde para orientação específica.</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold">Grávidas podem se vacinar?</Typography>
                <Typography>Algumas vacinas são recomendadas durante a gravidez (como dTpa e Influenza). Outras devem ser evitadas. Consulte seu médico.</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold">Onde posso me vacinar?</Typography>
                <Typography>As vacinas do calendário básico estão disponíveis gratuitamente em postos de saúde do SUS em todo o Brasil.</Typography>
              </Box>
            </Stack>
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
    <Box display="flex" height="100vh" bgcolor="background.default">
      {/* Sidebar Mobile */}
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        variant="temporary"
        sx={{ display: { xs: 'block', lg: 'none' } }}
      >
        <Box width={240} role="presentation">
          <Box p={2} bgcolor="success.main" color="white">
            <Typography variant="h6" fontWeight="bold">VacinaInfo</Typography>
          </Box>
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
        sx={{ 
          display: { xs: 'none', lg: 'flex' }, 
          flexDirection: 'column', 
          borderRight: 1, 
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Box p={2} bgcolor="success.main" color="white">
          <Box display="flex" alignItems="center" gap={1}>
            <Syringe size={24} />
            <Typography variant="h6" fontWeight="bold">VacinaInfo</Typography>
          </Box>
        </Box>
        <List sx={{ flex: 1 }}>
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
              <strong>Importante:</strong> Mantenha sua caderneta de vacinação sempre atualizada!
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Conteúdo principal */}
      <Box flex={1} display="flex" flexDirection="column">
        {/* Header */}
        <AppBar position="static" sx={{ bgcolor: 'background.paper', color: 'text.primary' }} elevation={1}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              sx={{ mr: 2, display: { lg: 'none' } }}
              onClick={() => setSidebarOpen(true)}
            >
              {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Box display="flex" alignItems="center" gap={1}>
              {pages[currentPage].icon}
              <Typography variant="h6" fontWeight="bold">
                {pages[currentPage].title}
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Conteúdo */}
        <Box flex={1} overflow="auto" p={3}>
          <Container maxWidth="lg">{pages[currentPage].content}</Container>
        </Box>

        {/* Footer */}
        <Divider />
        <Box p={2} textAlign="center" bgcolor="background.paper">
          <Typography variant="body2" color="text.secondary">
            © 2025 VacinaInfo - Informações baseadas no Programa Nacional de Imunizações (PNI)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VaccineSite;