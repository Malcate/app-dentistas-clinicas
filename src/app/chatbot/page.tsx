"use client"

// Fixed: Removed invalid lucide-react icons (Bank, Walk)
import { useState, useEffect, useRef } from 'react'
import { 
  MessageSquare, 
  Bot, 
  Settings, 
  BarChart3, 
  Users, 
  Clock, 
  Send, 
  Phone, 
  Calendar, 
  FileText, 
  Star, 
  TrendingUp, 
  Activity, 
  Zap, 
  CheckCircle, 
  AlertCircle, 
  Play, 
  Pause, 
  Edit3, 
  Trash2, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Eye, 
  MessageCircle, 
  Heart, 
  Share2, 
  MoreHorizontal,
  ArrowLeft,
  Smartphone,
  Globe,
  Headphones,
  Shield,
  Lightbulb,
  Target,
  Briefcase,
  Award,
  ChevronRight,
  ChevronDown,
  X,
  Save,
  Copy,
  RefreshCw,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Image,
  Paperclip,
  Smile,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Archive,
  Pin,
  Bookmark,
  ExternalLink,
  Link,
  QrCode,
  Wifi,
  WifiOff,
  Battery,
  Signal,
  Bluetooth,
  MapPin,
  Navigation,
  Compass,
  Route,
  Car,
  Truck,
  Plane,
  Train,
  Ship,
  Bike,
  Home,
  Building,
  Store,
  Hospital,
  School,
  Restaurant,
  Hotel,
  Gas,
  Parking,
  ShoppingCart,
  Package,
  Tag,
  CreditCard,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  Wallet,
  PiggyBank,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  TrendingDown,
  PieChart,
  LineChart
} from 'lucide-react'

// Tipos para o sistema de chatbot
interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
  type: 'text' | 'image' | 'file' | 'quick_reply' | 'appointment' | 'contact'
  metadata?: any
}

interface ChatSession {
  id: string
  patientName: string
  patientPhone: string
  status: 'active' | 'waiting' | 'closed' | 'transferred'
  lastMessage: string
  lastActivity: Date
  messages: ChatMessage[]
  tags: string[]
  priority: 'low' | 'medium' | 'high' | 'urgent'
  assignedAgent?: string
  source: 'whatsapp' | 'website' | 'facebook' | 'instagram'
}

interface BotFlow {
  id: string
  name: string
  description: string
  trigger: string
  isActive: boolean
  steps: BotStep[]
  analytics: {
    totalTriggers: number
    completionRate: number
    averageTime: number
  }
}

interface BotStep {
  id: string
  type: 'message' | 'question' | 'condition' | 'action' | 'transfer'
  content: string
  options?: string[]
  nextStep?: string
  conditions?: any
}

interface ChatbotAnalytics {
  totalConversations: number
  activeConversations: number
  averageResponseTime: number
  satisfactionRate: number
  appointmentsScheduled: number
  leadsCaptured: number
  conversionRate: number
  peakHours: { hour: number; count: number }[]
  topQuestions: { question: string; count: number }[]
  responseDistribution: { automated: number; human: number }
}

export default function ChatbotPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [botStatus, setBotStatus] = useState<'online' | 'offline' | 'maintenance'>('online')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'waiting' | 'closed'>('all')
  const [showBotBuilder, setShowBotBuilder] = useState(false)
  const [selectedFlow, setSelectedFlow] = useState<BotFlow | null>(null)
  const [isEditingFlow, setIsEditingFlow] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Dados simulados para demonstração
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: '1',
      patientName: 'Maria Silva',
      patientPhone: '+55 11 99999-1234',
      status: 'active',
      lastMessage: 'Gostaria de agendar uma consulta para limpeza',
      lastActivity: new Date(Date.now() - 5 * 60 * 1000),
      messages: [
        {
          id: '1',
          content: 'Olá! Bem-vindo à Clínica Dental Care. Como posso ajudá-lo hoje?',
          sender: 'bot',
          timestamp: new Date(Date.now() - 10 * 60 * 1000),
          type: 'text'
        },
        {
          id: '2',
          content: 'Gostaria de agendar uma consulta para limpeza',
          sender: 'user',
          timestamp: new Date(Date.now() - 5 * 60 * 1000),
          type: 'text'
        }
      ],
      tags: ['agendamento', 'limpeza'],
      priority: 'medium',
      source: 'whatsapp'
    },
    {
      id: '2',
      patientName: 'João Santos',
      patientPhone: '+55 11 98888-5678',
      status: 'waiting',
      lastMessage: 'Preciso de informações sobre implante dentário',
      lastActivity: new Date(Date.now() - 15 * 60 * 1000),
      messages: [
        {
          id: '3',
          content: 'Preciso de informações sobre implante dentário',
          sender: 'user',
          timestamp: new Date(Date.now() - 15 * 60 * 1000),
          type: 'text'
        }
      ],
      tags: ['implante', 'informações'],
      priority: 'high',
      source: 'whatsapp'
    },
    {
      id: '3',
      patientName: 'Ana Costa',
      patientPhone: '+55 11 97777-9012',
      status: 'closed',
      lastMessage: 'Obrigada! Consulta agendada com sucesso.',
      lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000),
      messages: [
        {
          id: '4',
          content: 'Obrigada! Consulta agendada com sucesso.',
          sender: 'user',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          type: 'text'
        }
      ],
      tags: ['agendamento', 'concluído'],
      priority: 'low',
      source: 'whatsapp'
    }
  ])

  const [botFlows, setBotFlows] = useState<BotFlow[]>([
    {
      id: '1',
      name: 'Agendamento de Consulta',
      description: 'Fluxo automatizado para agendamento de consultas odontológicas',
      trigger: 'agendar|consulta|horário',
      isActive: true,
      steps: [
        {
          id: '1',
          type: 'message',
          content: 'Ótimo! Vou ajudá-lo a agendar sua consulta. Qual tipo de procedimento você precisa?',
          nextStep: '2'
        },
        {
          id: '2',
          type: 'question',
          content: 'Escolha o tipo de consulta:',
          options: ['Limpeza', 'Clareamento', 'Implante', 'Ortodontia', 'Emergência'],
          nextStep: '3'
        },
        {
          id: '3',
          type: 'message',
          content: 'Perfeito! Agora preciso de alguns dados para finalizar o agendamento.',
          nextStep: '4'
        },
        {
          id: '4',
          type: 'transfer',
          content: 'Transferindo para nossa equipe de agendamento...',
          nextStep: null
        }
      ],
      analytics: {
        totalTriggers: 156,
        completionRate: 87.5,
        averageTime: 3.2
      }
    },
    {
      id: '2',
      name: 'Informações sobre Tratamentos',
      description: 'Fornece informações detalhadas sobre procedimentos odontológicos',
      trigger: 'informação|tratamento|procedimento|preço',
      isActive: true,
      steps: [
        {
          id: '1',
          type: 'message',
          content: 'Posso fornecer informações sobre nossos tratamentos. Sobre qual procedimento você gostaria de saber?',
          nextStep: '2'
        },
        {
          id: '2',
          type: 'question',
          content: 'Selecione o tratamento:',
          options: ['Implante Dentário', 'Ortodontia', 'Clareamento', 'Harmonização Facial', 'Prótese'],
          nextStep: '3'
        }
      ],
      analytics: {
        totalTriggers: 89,
        completionRate: 92.1,
        averageTime: 2.8
      }
    },
    {
      id: '3',
      name: 'Emergência Odontológica',
      description: 'Atendimento prioritário para casos de emergência',
      trigger: 'emergência|urgente|dor|socorro',
      isActive: true,
      steps: [
        {
          id: '1',
          type: 'message',
          content: '🚨 Entendo que você está com uma emergência odontológica. Vou priorizar seu atendimento.',
          nextStep: '2'
        },
        {
          id: '2',
          type: 'question',
          content: 'Descreva brevemente sua situação:',
          options: ['Dor intensa', 'Trauma/Acidente', 'Sangramento', 'Inchaço', 'Outro'],
          nextStep: '3'
        },
        {
          id: '3',
          type: 'transfer',
          content: 'Transferindo URGENTEMENTE para nossa equipe de emergência...',
          nextStep: null
        }
      ],
      analytics: {
        totalTriggers: 23,
        completionRate: 100,
        averageTime: 1.5
      }
    }
  ])

  const [analytics, setAnalytics] = useState<ChatbotAnalytics>({
    totalConversations: 1247,
    activeConversations: 8,
    averageResponseTime: 2.3,
    satisfactionRate: 94.2,
    appointmentsScheduled: 89,
    leadsCaptured: 156,
    conversionRate: 67.8,
    peakHours: [
      { hour: 9, count: 45 },
      { hour: 10, count: 52 },
      { hour: 11, count: 38 },
      { hour: 14, count: 41 },
      { hour: 15, count: 48 },
      { hour: 16, count: 35 }
    ],
    topQuestions: [
      { question: 'Como agendar consulta?', count: 89 },
      { question: 'Preço do implante', count: 67 },
      { question: 'Horário de funcionamento', count: 54 },
      { question: 'Aceita convênio?', count: 43 },
      { question: 'Localização da clínica', count: 38 }
    ],
    responseDistribution: { automated: 78, human: 22 }
  })

  // Filtrar sessões de chat
  const filteredSessions = chatSessions.filter(session => {
    const matchesSearch = session.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.patientPhone.includes(searchTerm) ||
                         session.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || session.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  // Scroll para o final das mensagens
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [selectedSession?.messages])

  // Enviar mensagem
  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedSession) return

    const message: ChatMessage = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    }

    // Atualizar sessão com nova mensagem
    setChatSessions(prev => 
      prev.map(session => 
        session.id === selectedSession.id
          ? {
              ...session,
              messages: [...session.messages, message],
              lastMessage: newMessage,
              lastActivity: new Date()
            }
          : session
      )
    )

    // Atualizar sessão selecionada
    setSelectedSession(prev => 
      prev ? {
        ...prev,
        messages: [...prev.messages, message],
        lastMessage: newMessage,
        lastActivity: new Date()
      } : null
    )

    setNewMessage('')

    // Simular resposta do bot após 2 segundos
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Obrigado pela sua mensagem! Nossa equipe irá responder em breve.',
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      }

      setChatSessions(prev => 
        prev.map(session => 
          session.id === selectedSession.id
            ? {
                ...session,
                messages: [...session.messages, botResponse],
                lastMessage: botResponse.content,
                lastActivity: new Date()
              }
            : session
        )
      )

      setSelectedSession(prev => 
        prev ? {
          ...prev,
          messages: [...prev.messages, botResponse],
          lastMessage: botResponse.content,
          lastActivity: new Date()
        } : null
      )
    }, 2000)
  }

  // Renderizar Dashboard
  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Status do Bot e Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${
                botStatus === 'online' ? 'bg-green-500' : 
                botStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
              <h3 className="font-semibold text-gray-900">Status do Bot</h3>
            </div>
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 capitalize">{botStatus}</p>
          <p className="text-sm text-gray-600">
            {botStatus === 'online' ? 'Funcionando normalmente' : 
             botStatus === 'offline' ? 'Bot desativado' : 'Em manutenção'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Conversas Ativas</h3>
            <MessageSquare className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{analytics.activeConversations}</p>
          <p className="text-sm text-gray-600">
            {analytics.totalConversations} total este mês
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Tempo de Resposta</h3>
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{analytics.averageResponseTime}min</p>
          <p className="text-sm text-gray-600">Média de resposta</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Satisfação</h3>
            <Star className="w-6 h-6 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{analytics.satisfactionRate}%</p>
          <p className="text-sm text-gray-600">Taxa de satisfação</p>
        </div>
      </div>

      {/* Gráficos e Estatísticas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Horários de Pico */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Horários de Maior Movimento</h3>
          <div className="space-y-4">
            {analytics.peakHours.map((hour) => (
              <div key={hour.hour} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{hour.hour}:00 - {hour.hour + 1}:00</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(hour.count / 60) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{hour.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perguntas Mais Frequentes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Perguntas Mais Frequentes</h3>
          <div className="space-y-4">
            {analytics.topQuestions.map((question, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700 flex-1">{question.question}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(question.count / 100) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{question.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Métricas de Conversão */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Agendamentos</h3>
              <p className="text-sm text-blue-700">Este mês</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-blue-900">{analytics.appointmentsScheduled}</p>
          <p className="text-sm text-blue-700 mt-2">+23% vs mês anterior</p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">Leads Capturados</h3>
              <p className="text-sm text-green-700">Este mês</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-green-900">{analytics.leadsCaptured}</p>
          <p className="text-sm text-green-700 mt-2">+18% vs mês anterior</p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="font-semibold text-purple-900">Taxa de Conversão</h3>
              <p className="text-sm text-purple-700">Leads → Pacientes</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-purple-900">{analytics.conversionRate}%</p>
          <p className="text-sm text-purple-700 mt-2">+5% vs mês anterior</p>
        </div>
      </div>

      {/* Distribuição de Respostas */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Distribuição de Atendimento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Respostas Automatizadas</span>
              <span className="font-semibold text-blue-600">{analytics.responseDistribution.automated}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full" 
                style={{ width: `${analytics.responseDistribution.automated}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Atendimento Humano</span>
              <span className="font-semibold text-green-600">{analytics.responseDistribution.human}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-green-600 h-3 rounded-full" 
                style={{ width: `${analytics.responseDistribution.human}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {analytics.responseDistribution.automated + analytics.responseDistribution.human}%
              </div>
              <p className="text-gray-600">Eficiência Total</p>
              <p className="text-sm text-gray-500 mt-2">
                Combinação perfeita entre automação e atendimento humano
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Renderizar Chat
  const renderChat = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
      {/* Lista de Conversas */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Conversas</h3>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${
                botStatus === 'online' ? 'bg-green-500' : 'bg-red-500'
              }`}></span>
              <span className="text-sm text-gray-600">{filteredSessions.length}</span>
            </div>
          </div>
          
          {/* Filtros e Busca */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar conversas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="all">Todas as conversas</option>
              <option value="active">Ativas</option>
              <option value="waiting">Aguardando</option>
              <option value="closed">Finalizadas</option>
            </select>
          </div>
        </div>
        
        {/* Lista de Sessões */}
        <div className="flex-1 overflow-y-auto">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              onClick={() => setSelectedSession(session)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedSession?.id === session.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">
                      {session.patientName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{session.patientName}</h4>
                    <p className="text-xs text-gray-500">{session.patientPhone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    session.status === 'active' ? 'bg-green-500' :
                    session.status === 'waiting' ? 'bg-yellow-500' :
                    session.status === 'closed' ? 'bg-gray-400' : 'bg-blue-500'
                  }`}></span>
                  
                  {session.priority === 'urgent' && (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {session.lastMessage}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {session.source === 'whatsapp' && (
                    <MessageSquare className="w-4 h-4 text-green-600" />
                  )}
                  <span className="text-xs text-gray-500">
                    {session.lastActivity.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
                
                <div className="flex gap-1">
                  {session.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área de Chat */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col">
        {selectedSession ? (
          <>
            {/* Header do Chat */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium text-blue-600">
                      {selectedSession.patientName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedSession.patientName}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{selectedSession.patientPhone}</span>
                      <span className={`w-2 h-2 rounded-full ${
                        selectedSession.status === 'active' ? 'bg-green-500' :
                        selectedSession.status === 'waiting' ? 'bg-yellow-500' :
                        'bg-gray-400'
                      }`}></span>
                      <span className="text-xs text-gray-500 capitalize">{selectedSession.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mensagens */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {selectedSession.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString('pt-BR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input de Mensagem */}
            <div className="p-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Digite sua mensagem..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Respostas Rápidas */}
              <div className="flex gap-2 mt-3">
                {[
                  'Obrigado pelo contato!',
                  'Vou verificar para você',
                  'Posso agendar sua consulta',
                  'Precisa de mais informações?'
                ].map((quickReply) => (
                  <button
                    key={quickReply}
                    onClick={() => setNewMessage(quickReply)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {quickReply}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Selecione uma conversa</h3>
              <p className="text-gray-600">Escolha uma conversa da lista para começar a responder</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  // Renderizar Configurações do Bot
  const renderBotSettings = () => (
    <div className="space-y-6">
      {/* Status e Controles Gerais */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Configurações do Bot</h3>
            <p className="text-sm text-gray-600">Configure o comportamento da atendente virtual</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Status:</span>
              <select
                value={botStatus}
                onChange={(e) => setBotStatus(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="maintenance">Manutenção</option>
              </select>
            </div>
          </div>
        </div>

        {/* Configurações Básicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Atendente Virtual
              </label>
              <input
                type="text"
                defaultValue="Sofia - Assistente Dental"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem de Boas-vindas
              </label>
              <textarea
                rows={3}
                defaultValue="Olá! Sou a Sofia, assistente virtual da Clínica Dental Care. Como posso ajudá-lo hoje? 😊"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horário de Funcionamento
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="time"
                  defaultValue="08:00"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="time"
                  defaultValue="18:00"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tempo limite para resposta automática
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="30">30 segundos</option>
                <option value="60">1 minuto</option>
                <option value="120">2 minutos</option>
                <option value="300">5 minutos</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem fora do horário
              </label>
              <textarea
                rows={3}
                defaultValue="Obrigado pelo contato! Nosso horário de atendimento é de 8h às 18h. Retornaremos assim que possível."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Transferir para humano automaticamente
                </label>
                <p className="text-xs text-gray-500">
                  Quando o bot não conseguir resolver
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Fluxos de Conversa */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Fluxos de Conversa</h3>
            <p className="text-sm text-gray-600">Configure respostas automáticas para diferentes situações</p>
          </div>
          
          <button
            onClick={() => setShowBotBuilder(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Novo Fluxo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {botFlows.map((flow) => (
            <div key={flow.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${flow.isActive ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <h4 className="font-medium text-gray-900">{flow.name}</h4>
                </div>
                
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setSelectedFlow(flow)
                      setIsEditingFlow(true)
                      setShowBotBuilder(true)
                    }}
                    className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{flow.description}</p>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Gatilho:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">{flow.trigger}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Acionamentos:</span>
                  <span className="font-medium">{flow.analytics.totalTriggers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Taxa de conclusão:</span>
                  <span className="font-medium text-green-600">{flow.analytics.completionRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Tempo médio:</span>
                  <span className="font-medium">{flow.analytics.averageTime}min</span>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={flow.isActive}
                    onChange={(e) => {
                      setBotFlows(prev => 
                        prev.map(f => 
                          f.id === flow.id ? { ...f, isActive: e.target.checked } : f
                        )
                      )
                    }}
                    className="sr-only peer" 
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    {flow.isActive ? 'Ativo' : 'Inativo'}
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integração WhatsApp */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Integração WhatsApp Business</h3>
            <p className="text-sm text-gray-600">Configure a conexão com o WhatsApp Business API</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número do WhatsApp Business
              </label>
              <input
                type="tel"
                placeholder="+55 11 99999-9999"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Token de Acesso
              </label>
              <input
                type="password"
                placeholder="Seu token do WhatsApp Business API"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Webhook URL
              </label>
              <input
                type="url"
                placeholder="https://sua-clinica.com/webhook"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">Status da Conexão</span>
              </div>
              <p className="text-sm text-green-700">
                WhatsApp Business conectado e funcionando normalmente
              </p>
              <div className="mt-3 text-xs text-green-600">
                <p>• Mensagens enviadas: 1,247</p>
                <p>• Mensagens recebidas: 892</p>
                <p>• Última sincronização: há 2 minutos</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Confirmação de leitura</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Notificações de entrega</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Backup de conversas</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex gap-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Testar Conexão
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Salvar Configurações
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Gerar QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Renderizar Relatórios
  const renderReports = () => (
    <div className="space-y-6">
      {/* Filtros de Relatório */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Relatórios e Analytics</h3>
          <div className="flex items-center gap-3">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="7">Últimos 7 dias</option>
              <option value="30">Últimos 30 dias</option>
              <option value="90">Últimos 3 meses</option>
              <option value="365">Último ano</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-green-600">+12.5%</p>
            </div>
          </div>
          <h3 className="font-medium text-gray-900">Total de Conversas</h3>
          <p className="text-sm text-gray-600">Este mês</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">2.3min</p>
              <p className="text-sm text-green-600">-0.8min</p>
            </div>
          </div>
          <h3 className="font-medium text-gray-900">Tempo de Resposta</h3>
          <p className="text-sm text-gray-600">Média</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">94.2%</p>
              <p className="text-sm text-green-600">+2.1%</p>
            </div>
          </div>
          <h3 className="font-medium text-gray-900">Satisfação</h3>
          <p className="text-sm text-gray-600">Taxa média</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">67.8%</p>
              <p className="text-sm text-green-600">+5.2%</p>
            </div>
          </div>
          <h3 className="font-medium text-gray-900">Conversão</h3>
          <p className="text-sm text-gray-600">Lead → Paciente</p>
        </div>
      </div>

      {/* Gráficos Detalhados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Conversas por Dia */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Conversas por Dia</h3>
          <div className="h-64 bg-gray-50 rounded-xl flex items-end justify-between p-4">
            {[45, 52, 38, 61, 48, 35, 42].map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div 
                  className="bg-blue-600 rounded-t w-8"
                  style={{ height: `${(value / 70) * 200}px` }}
                ></div>
                <span className="text-xs text-gray-600">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][index]}
                </span>
                <span className="text-xs font-medium text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Distribuição por Tipo de Atendimento */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Tipos de Atendimento</h3>
          <div className="space-y-4">
            {[
              { type: 'Agendamento', count: 456, color: 'bg-blue-600', percentage: 36.6 },
              { type: 'Informações', count: 298, color: 'bg-green-600', percentage: 23.9 },
              { type: 'Emergência', count: 187, color: 'bg-red-600', percentage: 15.0 },
              { type: 'Suporte', count: 156, color: 'bg-yellow-600', percentage: 12.5 },
              { type: 'Outros', count: 150, color: 'bg-gray-600', percentage: 12.0 }
            ].map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${item.color}`}></div>
                  <span className="text-sm text-gray-700">{item.type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12 text-right">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabela de Performance dos Fluxos */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance dos Fluxos</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Fluxo</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Acionamentos</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Conclusões</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Taxa de Sucesso</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Tempo Médio</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {botFlows.map((flow) => (
                <tr key={flow.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{flow.name}</p>
                      <p className="text-sm text-gray-600">{flow.description}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-900">{flow.analytics.totalTriggers}</td>
                  <td className="py-3 px-4 text-gray-900">
                    {Math.round(flow.analytics.totalTriggers * (flow.analytics.completionRate / 100))}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      flow.analytics.completionRate >= 90 ? 'bg-green-100 text-green-800' :
                      flow.analytics.completionRate >= 70 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {flow.analytics.completionRate}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900">{flow.analytics.averageTime}min</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      flow.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {flow.isActive ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.history.back()}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Chatbot Odontológico</h1>
                  <p className="text-sm text-gray-600">Atendente Virtual Especializada</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  botStatus === 'online' ? 'bg-green-500' : 
                  botStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
                <span className="text-sm text-gray-600 capitalize">{botStatus}</span>
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'chat', label: 'Conversas', icon: MessageSquare },
            { id: 'settings', label: 'Configurações', icon: Settings },
            { id: 'reports', label: 'Relatórios', icon: Activity }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'chat' && renderChat()}
        {activeTab === 'settings' && renderBotSettings()}
        {activeTab === 'reports' && renderReports()}
      </div>

      {/* Floating Action Button para Mobile */}
      <button 
        onClick={() => setActiveTab('chat')}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center lg:hidden"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  )
}
