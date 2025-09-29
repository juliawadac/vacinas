'use client';
import React, { useState } from 'react';
import { Menu, X, Syringe, Calendar, Info, BookOpen, ChevronRight } from 'lucide-react';

const VaccineSite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages = {
    home: {
      title: 'Início',
      icon: <Syringe className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Informações sobre Vacinas
            </h1>
            <p className="text-xl opacity-90">
              Proteja sua saúde e de sua família com informações confiáveis sobre vacinação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Calendários</h3>
              <p className="text-gray-600">
                Consulte os calendários de vacinação para todas as faixas etárias
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tipos de Vacinas</h3>
              <p className="text-gray-600">
                Conheça os diferentes tipos de vacinas e suas características
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Educação</h3>
              <p className="text-gray-600">
                Aprenda sobre a importância da vacinação e tire suas dúvidas
              </p>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Por que vacinar?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                As vacinas são uma das formas mais eficazes de prevenção de doenças. Elas estimulam o sistema imunológico a produzir defesas contra vírus e bactérias específicos, protegendo você e toda a comunidade.
              </p>
              <p>
                A vacinação em dia é essencial para erradicar doenças, como aconteceu com a varíola, e controlar outras como sarampo, poliomielite e rubéola.
              </p>
            </div>
          </div>
        </div>
      )
    },
    calendarios: {
      title: 'Calendários de Vacinação',
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-800">Calendários de Vacinação</h1>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                <ChevronRight className="w-6 h-6" />
                Crianças (0-10 anos)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">Idade</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">Vacina</th>
                      <th className="px-4 py-3 text-left text-gray-700 font-semibold">Doses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-700">Ao nascer</td>
                      <td className="px-4 py-3 text-gray-700">BCG, Hepatite B</td>
                      <td className="px-4 py-3 text-gray-700">Dose única</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">2 meses</td>
                      <td className="px-4 py-3 text-gray-700">Pentavalente, VIP, Rotavírus, Pneumocócica 10</td>
                      <td className="px-4 py-3 text-gray-700">1ª dose</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">3 meses</td>
                      <td className="px-4 py-3 text-gray-700">Meningocócica C</td>
                      <td className="px-4 py-3 text-gray-700">1ª dose</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">4 meses</td>
                      <td className="px-4 py-3 text-gray-700">Pentavalente, VIP, Rotavírus, Pneumocócica 10</td>
                      <td className="px-4 py-3 text-gray-700">2ª dose</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">5 meses</td>
                      <td className="px-4 py-3 text-gray-700">Meningocócica C</td>
                      <td className="px-4 py-3 text-gray-700">2ª dose</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">6 meses</td>
                      <td className="px-4 py-3 text-gray-700">Pentavalente, VIP</td>
                      <td className="px-4 py-3 text-gray-700">3ª dose</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">9 meses</td>
                      <td className="px-4 py-3 text-gray-700">Febre Amarela</td>
                      <td className="px-4 py-3 text-gray-700">Dose inicial</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">12 meses</td>
                      <td className="px-4 py-3 text-gray-700">Tríplice Viral, Pneumocócica 10, Meningocócica C</td>
                      <td className="px-4 py-3 text-gray-700">Reforço</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">15 meses</td>
                      <td className="px-4 py-3 text-gray-700">DTP, VOP, Hepatite A, Tetra Viral</td>
                      <td className="px-4 py-3 text-gray-700">Reforço/Dose</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">4 anos</td>
                      <td className="px-4 py-3 text-gray-700">DTP, VOP, Febre Amarela, Varicela</td>
                      <td className="px-4 py-3 text-gray-700">Reforço</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                <ChevronRight className="w-6 h-6" />
                Adolescentes (11-19 anos)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">HPV</h3>
                  <p className="text-gray-700">2 doses (0 e 6 meses) - 9 a 14 anos</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Meningocócica ACWY</h3>
                  <p className="text-gray-700">Dose única ou reforço - 11 a 12 anos</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Tríplice Viral</h3>
                  <p className="text-gray-700">2 doses (se não vacinado anteriormente)</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">dTpa</h3>
                  <p className="text-gray-700">Reforço a cada 10 anos</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                <ChevronRight className="w-6 h-6" />
                Adultos e Idosos
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-gray-800">Influenza (Gripe)</p>
                    <p className="text-gray-700">Anual - todas as idades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-gray-800">Pneumocócica</p>
                    <p className="text-gray-700">A partir de 60 anos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-gray-800">Herpes Zóster</p>
                    <p className="text-gray-700">A partir de 50 anos (rede privada)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-gray-800">dTpa</p>
                    <p className="text-gray-700">Reforço a cada 10 anos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    tipos: {
      title: 'Tipos de Vacinas',
      icon: <Info className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-800">Tipos de Vacinas</h1>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vacinas Inativadas</h2>
              <p className="text-gray-700 mb-3">
                Contêm vírus ou bactérias mortos que não podem causar doença. O sistema imunológico reconhece o agente inativado e produz anticorpos.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Exemplos:</p>
                <p className="text-gray-700">Hepatite A, Raiva, Poliomielite injetável (VIP), Influenza</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vacinas Atenuadas</h2>
              <p className="text-gray-700 mb-3">
                Contêm vírus ou bactérias vivos, mas enfraquecidos. Eles se multiplicam no organismo, mas não causam a doença em pessoas saudáveis.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Exemplos:</p>
                <p className="text-gray-700">Tríplice Viral (sarampo, caxumba, rubéola), Varicela, Febre Amarela, BCG</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vacinas de Subunidades</h2>
              <p className="text-gray-700 mb-3">
                Utilizam apenas partes específicas do vírus ou bactéria (proteínas ou açúcares) para estimular a resposta imunológica.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Exemplos:</p>
                <p className="text-gray-700">Hepatite B, HPV, Pneumocócica, Meningocócica</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vacinas de Toxóides</h2>
              <p className="text-gray-700 mb-3">
                Utilizam toxinas inativadas produzidas por bactérias. O sistema imunológico aprende a neutralizar essas toxinas.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Exemplos:</p>
                <p className="text-gray-700">Tétano, Difteria (componentes da DTP e dTpa)</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vacinas de mRNA</h2>
              <p className="text-gray-700 mb-3">
                Tecnologia mais recente que ensina as células a produzir uma proteína que desencadeia a resposta imunológica.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Exemplos:</p>
                <p className="text-gray-700">Algumas vacinas contra COVID-19 (Pfizer, Moderna)</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vacinas de Vetor Viral</h2>
              <p className="text-gray-700 mb-3">
                Utilizam um vírus modificado (que não causa doença) para transportar material genético do agente que queremos combater.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Exemplos:</p>
                <p className="text-gray-700">Algumas vacinas contra COVID-19 (AstraZeneca, Janssen)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    educacao: {
      title: 'Educação e Informações',
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-800">Educação e Informações</h1>
          
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Como as vacinas funcionam?</h2>
            <p className="text-lg opacity-90">
              As vacinas ensinam o sistema imunológico a reconhecer e combater vírus e bactérias específicos. Quando você é vacinado, seu corpo cria uma "memória" imunológica que permite uma resposta rápida e eficaz caso entre em contato com a doença real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4">Mitos sobre vacinas</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-800">❌ Vacinas causam autismo</p>
                  <p className="text-gray-700">Falso. Estudos científicos extensos comprovaram que não há relação entre vacinas e autismo.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">❌ Imunidade natural é melhor</p>
                  <p className="text-gray-700">Falso. Algumas doenças podem causar complicações graves ou morte. As vacinas oferecem proteção sem os riscos.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">❌ Muitas vacinas sobrecarregam o sistema imunológico</p>
                  <p className="text-gray-700">Falso. O sistema imunológico pode lidar com múltiplas vacinas simultaneamente com segurança.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Verdades sobre vacinas</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-800">✅ Vacinas salvam vidas</p>
                  <p className="text-gray-700">As vacinas previnem de 2 a 3 milhões de mortes por ano globalmente.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">✅ São seguras e eficazes</p>
                  <p className="text-gray-700">Passam por rigorosos testes antes de serem aprovadas e são continuamente monitoradas.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">✅ Protegem a comunidade</p>
                  <p className="text-gray-700">A imunidade coletiva protege pessoas que não podem ser vacinadas por razões médicas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Efeitos colaterais comuns</h3>
            <p className="text-gray-700 mb-4">
              A maioria dos efeitos colaterais das vacinas é leve e temporária. Eles são sinais de que o corpo está construindo proteção:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-2">Locais</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Dor no local</li>
                  <li>• Vermelhidão</li>
                  <li>• Inchaço</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-2">Sistêmicos</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Febre baixa</li>
                  <li>• Fadiga</li>
                  <li>• Dor de cabeça</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-2">Duração</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1-2 dias</li>
                  <li>• Leves</li>
                  <li>• Temporários</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-800">Posso tomar várias vacinas no mesmo dia?</p>
                <p className="text-gray-700">Sim, é seguro e recomendado. Isso reduz o número de visitas ao posto de saúde.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Preciso vacinar se já tive a doença?</p>
                <p className="text-gray-700">Depende da doença. Consulte um profissional de saúde para orientação específica.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Grávidas podem se vacinar?</p>
                <p className="text-gray-700">Algumas vacinas são recomendadas durante a gravidez (como dTpa e Influenza). Outras devem ser evitadas. Consulte seu médico.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Onde posso me vacinar?</p>
                <p className="text-gray-700">As vacinas do calendário básico estão disponíveis gratuitamente em postos de saúde do SUS em todo o Brasil.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const navigation = [
    { id: 'home', ...pages.home },
    { id: 'calendarios', ...pages.calendarios },
    { id: 'tipos', ...pages.tipos },
    { id: 'educacao', ...pages.educacao }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
        <div className="flex flex-col h-full">
          <div className="p-6 bg-gradient-to-r from-green-600 to-green-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Syringe className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-white text-xl font-bold">VacinaInfo</h2>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t">
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Importante:</span> Mantenha sua caderneta de vacinação sempre atualizada!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-30">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-2">
              {pages[currentPage].icon}
              <h1 className="text-xl font-bold text-gray-800">{pages[currentPage].title}</h1>
            </div>
            <div className="w-10 lg:w-0"></div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto p-6">
            {pages[currentPage].content}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t py-4">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-gray-600 text-sm">
              © 2025 VacinaInfo - Informações baseadas no Programa Nacional de Imunizações (PNI)
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VaccineSite;