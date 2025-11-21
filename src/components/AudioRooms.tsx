"use client"

import { useState, useEffect } from 'react'
import { 
  Mic, 
  MicOff, 
  Users, 
  Hand, 
  Share2, 
  Heart, 
  MessageSquare, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Calendar,
  Clock,
  Star,
  Plus,
  Search,
  Filter,
  X,
  Send,
  Phone,
  PhoneOff,
  Settings,
  MoreHorizontal,
  UserPlus,
  Crown,
  Zap,
  Gift,
  Copy,
  ExternalLink,
  Bookmark,
  Flag,
  Shield,
  Eye,
  EyeOff,
  Lock,
  Globe,
  Headphones,
  Radio,
  Wifi,
  WifiOff,
  Battery,
  Signal
} from 'lucide-react'
import toast from 'react-hot-toast'

interface AudioRoom {
  id: number
  title: string
  description: string
  host: {
    name: string
    avatar: string
    specialty: string
    verified: boolean
    followers: number
  }
  coHosts: Array<{
    name: string
    avatar: string
    specialty: string
  }>
  listeners: number
  speakers: Array<{
    name: string
    avatar: string
    specialty: string
    isSpeaking: boolean
  }>
  isLive: boolean
  startTime: string
  duration: string
  category: string
  tags: string[]
  isPrivate: boolean
  hasRecording: boolean
  supportEnabled: boolean
  pixKey?: string
  whatsappLink?: string
  chatMessages: Array<{
    id: number
    user: string
    message: string
    timestamp: string
  }>
}

interface ScheduledEvent {
  id: number
  title: string
  description: string
  host: {
    name: string
    avatar: string
    specialty: string
  }
  scheduledFor: string
  estimatedDuration: string
  category: string
  isPrivate: boolean
  maxListeners?: number
  reminderSent: boolean
}

interface PopularHost {
  id: number
  name: string
  avatar: string
  specialty: string
  verified: boolean
  followers: number
  totalRooms: number
  totalListeners: number
  rating: number
}

export default function AudioRooms() {
  const [activeView, setActiveView] = useState<'home' | 'room' | 'create' | 'replay' | 'profile'>('home')
  const [selectedRoom, setSelectedRoom] = useState<AudioRoom | null>(null)
  const [selectedHost, setSelectedHost] = useState<PopularHost | null>(null)
  const [isListening, setIsListening] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [handRaised, setHandRaised] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [showChat, setShowChat] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Dados simulados das salas ao vivo
  const [liveRooms, setLiveRooms] = useState<AudioRoom[]>([
    {
      id: 1,
      title: "Casos Complexos de Implantes Zigomáticos",
      description: "Discussão sobre técnicas avançadas e casos desafiadores em implantodontia zigomática",
      host: {
        name: "Dra. Camila Torres",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
        specialty: "Implantodontista",
        verified: true,
        followers: 2847
      },
      coHosts: [
        {
          name: "Dr. Ricardo Silva",
          avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
          specialty: "Cirurgião Bucomaxilofacial"
        }
      ],
      listeners: 156,
      speakers: [
        {
          name: "Dra. Camila Torres",
          avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
          specialty: "Implantodontista",
          isSpeaking: true
        },
        {
          name: "Dr. Ricardo Silva",
          avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
          specialty: "Cirurgião Bucomaxilofacial",
          isSpeaking: false
        },
        {
          name: "Dra. Ana Costa",
          avatar: "https://images.unsplash.com/photo-1594824388853-e0c8e0e0c0e0?w=100&h=100&fit=crop&crop=face",
          specialty: "Periodontista",
          isSpeaking: false
        }
      ],
      isLive: true,
      startTime: "14:30",
      duration: "1h 23min",
      category: "Implantodontia",
      tags: ["implantes", "zigomático", "casos complexos", "cirurgia"],
      isPrivate: false,
      hasRecording: true,
      supportEnabled: true,
      pixKey: "dra.camila@email.com",
      whatsappLink: "https://wa.me/5511999999999",
      chatMessages: [
        {
          id: 1,
          user: "Dr. João",
          message: "Excelente apresentação! Qual a taxa de sucesso em casos de atrofia severa?",
          timestamp: "14:45"
        },
        {
          id: 2,
          user: "Dra. Maria",
          message: "Concordo! Gostaria de saber sobre o pós-operatório",
          timestamp: "14:47"
        }
      ]
    },
    {
      id: 2,
      title: "Marketing Digital para Consultórios - Estratégias 2024",
      description: "Como aumentar sua carteira de pacientes usando ferramentas digitais modernas",
      host: {
        name: "Dr. Felipe Marketing",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        specialty: "Consultor em Marketing Odontológico",
        verified: true,
        followers: 1923
      },
      coHosts: [],
      listeners: 89,
      speakers: [
        {
          name: "Dr. Felipe Marketing",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          specialty: "Consultor em Marketing Odontológico",
          isSpeaking: true
        }
      ],
      isLive: true,
      startTime: "15:00",
      duration: "45min",
      category: "Marketing",
      tags: ["marketing digital", "redes sociais", "pacientes", "consultório"],
      isPrivate: false,
      hasRecording: true,
      supportEnabled: true,
      pixKey: "felipe.marketing@pix.com",
      whatsappLink: "https://wa.me/5511888888888",
      chatMessages: [
        {
          id: 1,
          user: "Dra. Carla",
          message: "Qual a melhor rede social para odontologia?",
          timestamp: "15:15"
        }
      ]
    },
    {
      id: 3,
      title: "Harmonização Facial: Tendências e Técnicas Seguras",
      description: "Discussão sobre as últimas tendências em harmonização facial e protocolos de segurança",
      host: {
        name: "Dra. Isabella Estética",
        avatar: "https://images.unsplash.com/photo-1594824388853-e0c8e0e0c0e0?w=100&h=100&fit=crop&crop=face",
        specialty: "Harmonização Facial",
        verified: true,
        followers: 3456
      },
      coHosts: [
        {
          name: "Dr. Carlos Dermatologista",
          avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
          specialty: "Dermatologista"
        }
      ],
      listeners: 234,
      speakers: [
        {
          name: "Dra. Isabella Estética",
          avatar: "https://images.unsplash.com/photo-1594824388853-e0c8e0e0c0e0?w=100&h=100&fit=crop&crop=face",
          specialty: "Harmonização Facial",
          isSpeaking: false
        },
        {
          name: "Dr. Carlos Dermatologista",
          avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
          specialty: "Dermatologista",
          isSpeaking: true
        }
      ],
      isLive: true,
      startTime: "16:00",
      duration: "2h 10min",
      category: "Estética",
      tags: ["harmonização", "botox", "preenchimento", "segurança"],
      isPrivate: false,
      hasRecording: true,
      supportEnabled: true,
      pixKey: "isabella.estetica@pix.com",
      whatsappLink: "https://wa.me/5511777777777",
      chatMessages: []
    }
  ])

  // Eventos agendados
  const [scheduledEvents, setScheduledEvents] = useState<ScheduledEvent[]>([
    {
      id: 1,
      title: "Ortodontia Invisível: Casos Clínicos",
      description: "Apresentação de casos reais com alinhadores invisíveis",
      host: {
        name: "Dr. Roberto Ortodontista",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
        specialty: "Ortodontista"
      },
      scheduledFor: "2024-01-20T19:00:00",
      estimatedDuration: "1h 30min",
      category: "Ortodontia",
      isPrivate: false,
      maxListeners: 200,
      reminderSent: false
    },
    {
      id: 2,
      title: "Gestão Financeira para Clínicas",
      description: "Como organizar as finanças e aumentar a lucratividade",
      host: {
        name: "Dra. Patricia Gestão",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
        specialty: "Consultora em Gestão"
      },
      scheduledFor: "2024-01-21T14:00:00",
      estimatedDuration: "2h",
      category: "Gestão",
      isPrivate: false,
      maxListeners: 150,
      reminderSent: false
    },
    {
      id: 3,
      title: "Endodontia Avançada: Retratamentos",
      description: "Técnicas modernas para retratamentos endodônticos complexos",
      host: {
        name: "Dr. Eduardo Endo",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        specialty: "Endodontista"
      },
      scheduledFor: "2024-01-22T20:00:00",
      estimatedDuration: "1h 45min",
      category: "Endodontia",
      isPrivate: true,
      maxListeners: 50,
      reminderSent: false
    }
  ])

  // Hosts populares da semana
  const [popularHosts, setPopularHosts] = useState<PopularHost[]>([
    {
      id: 1,
      name: "Dra. Camila Torres",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      specialty: "Implantodontista",
      verified: true,
      followers: 2847,
      totalRooms: 12,
      totalListeners: 1456,
      rating: 4.9
    },
    {
      id: 2,
      name: "Dra. Isabella Estética",
      avatar: "https://images.unsplash.com/photo-1594824388853-e0c8e0e0c0e0?w=100&h=100&fit=crop&crop=face",
      specialty: "Harmonização Facial",
      verified: true,
      followers: 3456,
      totalRooms: 8,
      totalListeners: 2134,
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Felipe Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      specialty: "Consultor em Marketing Odontológico",
      verified: true,
      followers: 1923,
      totalRooms: 15,
      totalListeners: 987,
      rating: 4.7
    }
  ])

  // Função para entrar na sala
  const joinRoom = (room: AudioRoom) => {
    setSelectedRoom(room)
    setActiveView('room')
    setIsListening(true)
    toast.success(`Você entrou na sala: ${room.title}`)
  }

  // Função para sair da sala
  const leaveRoom = () => {
    setIsListening(false)
    setHandRaised(false)
    setShowChat(false)
    setActiveView('home')
    setSelectedRoom(null)
    toast.success('Você saiu da sala')
  }

  // Função para levantar/baixar a mão
  const toggleHand = () => {
    setHandRaised(!handRaised)
    toast.success(handRaised ? 'Mão baixada' : 'Mão levantada! Aguarde ser chamado para falar')
  }

  // Função para enviar mensagem no chat
  const sendChatMessage = () => {
    if (!chatMessage.trim() || !selectedRoom) return

    const newMessage = {
      id: Date.now(),
      user: "Você",
      message: chatMessage,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }

    setSelectedRoom({
      ...selectedRoom,
      chatMessages: [...selectedRoom.chatMessages, newMessage]
    })

    setChatMessage('')
    toast.success('Mensagem enviada!')
  }

  // Função para compartilhar sala no WhatsApp
  const shareOnWhatsApp = (room: AudioRoom) => {
    const message = `🎙️ Estou ouvindo uma sala incrível no Dental Social!\n\n"${room.title}"\n\nCom ${room.host.name} - ${room.host.specialty}\n\n${room.listeners} pessoas ouvindo agora!\n\nVenha participar: [link da sala]`
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    toast.success('Compartilhado no WhatsApp!')
  }

  // Função para enviar apoio via Pix
  const sendPixSupport = (room: AudioRoom) => {
    if (!room.pixKey) {
      toast.error('Host não configurou Pix para receber apoio')
      return
    }

    // Copiar chave Pix
    navigator.clipboard.writeText(room.pixKey)
    toast.success(`Chave Pix copiada: ${room.pixKey}`)
  }

  // Função para agendar lembrete
  const scheduleReminder = (event: ScheduledEvent) => {
    // Simular agendamento de notificação
    toast.success(`Lembrete agendado para 15 minutos antes de: ${event.title}`)
  }

  // Função para seguir host
  const followHost = (host: PopularHost) => {
    toast.success(`Agora você está seguindo ${host.name}`)
  }

  // Filtrar salas por categoria e busca
  const filteredRooms = liveRooms.filter(room => {
    const matchesCategory = selectedCategory === 'all' || room.category.toLowerCase() === selectedCategory
    const matchesSearch = room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.host.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Renderizar Home das Salas de Áudio
  const renderHome = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Radio className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Salas de Áudio ao Vivo</h1>
              <p className="text-purple-100">Conecte-se com profissionais da odontologia</p>
            </div>
          </div>
          
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Criar Sala
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{liveRooms.length}</div>
            <div className="text-sm text-purple-100">Salas Ativas</div>
          </div>
          <div>
            <div className="text-2xl font-bold">
              {liveRooms.reduce((acc, room) => acc + room.listeners, 0)}
            </div>
            <div className="text-sm text-purple-100">Ouvintes Online</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{scheduledEvents.length}</div>
            <div className="text-sm text-purple-100">Eventos Agendados</div>
          </div>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar salas, hosts, temas..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Todas as categorias</option>
              <option value="implantodontia">Implantodontia</option>
              <option value="ortodontia">Ortodontia</option>
              <option value="estética">Estética</option>
              <option value="marketing">Marketing</option>
              <option value="gestão">Gestão</option>
              <option value="endodontia">Endodontia</option>
            </select>
          </div>
        </div>
      </div>

      {/* Salas AO VIVO */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-semibold text-gray-900">AO VIVO AGORA</h2>
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
            {filteredRooms.length} salas ativas
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div key={room.id} className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
              {/* Header da Sala */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-600 font-medium">AO VIVO</span>
                  <span className="text-xs text-gray-500">{room.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Users className="w-3 h-3" />
                  {room.listeners}
                </div>
              </div>

              {/* Título e Categoria */}
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{room.title}</h3>
              <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mb-3">
                {room.category}
              </span>

              {/* Host */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={room.host.avatar} 
                  alt={room.host.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-gray-900 text-sm">{room.host.name}</p>
                    {room.host.verified && (
                      <Crown className="w-3 h-3 text-yellow-500" />
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{room.host.specialty}</p>
                </div>
              </div>

              {/* Speakers */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-gray-600">Falando:</span>
                <div className="flex -space-x-2">
                  {room.speakers.slice(0, 3).map((speaker, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={speaker.avatar} 
                        alt={speaker.name}
                        className={`w-6 h-6 rounded-full border-2 ${
                          speaker.isSpeaking ? 'border-green-500' : 'border-white'
                        }`}
                      />
                      {speaker.isSpeaking && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  ))}
                  {room.speakers.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-gray-600">+{room.speakers.length - 3}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {room.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Botão de Entrar */}
              <button 
                onClick={() => joinRoom(room)}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Headphones className="w-4 h-4" />
                Entrar na Sala
              </button>
            </div>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <Radio className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma sala encontrada</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || selectedCategory !== 'all' 
                ? 'Tente ajustar os filtros de busca'
                : 'Seja o primeiro a criar uma sala nesta categoria'
              }
            </p>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Criar Primeira Sala
            </button>
          </div>
        )}
      </div>

      {/* Eventos Agendados */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Próximos Eventos</h2>
        </div>
        
        <div className="space-y-4">
          {scheduledEvents.map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">
                    {new Date(event.scheduledFor).toLocaleDateString('pt-BR')} às{' '}
                    {new Date(event.scheduledFor).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {event.isPrivate && (
                    <Lock className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {event.category}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{event.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={event.host.avatar} 
                    alt={event.host.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{event.host.name}</p>
                    <p className="text-xs text-gray-600">{event.host.specialty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{event.estimatedDuration}</span>
                  <button 
                    onClick={() => scheduleReminder(event)}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors text-sm flex items-center gap-1"
                  >
                    <Bell className="w-3 h-3" />
                    Lembrete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hosts Populares da Semana */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-6 h-6 text-yellow-600" />
          <h2 className="text-xl font-semibold text-gray-900">Hosts Populares da Semana</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularHosts.map((host, index) => (
            <div key={host.id} className="border border-gray-200 rounded-xl p-4 text-center">
              <div className="relative mb-4">
                <img 
                  src={host.avatar} 
                  alt={host.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto"
                />
                {index < 3 && (
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>
                    {index + 1}
                  </div>
                )}
                {host.verified && (
                  <Crown className="w-4 h-4 text-yellow-500 absolute -bottom-1 -right-1" />
                )}
              </div>

              <h3 className="font-semibold text-gray-900 mb-1">{host.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{host.specialty}</p>

              <div className="grid grid-cols-2 gap-4 text-center mb-4">
                <div>
                  <div className="text-lg font-bold text-gray-900">{host.followers}</div>
                  <div className="text-xs text-gray-600">Seguidores</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{host.totalRooms}</div>
                  <div className="text-xs text-gray-600">Salas</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 mb-4">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-900">{host.rating}</span>
                <span className="text-xs text-gray-600">({host.totalListeners} ouvintes)</span>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => followHost(host)}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                >
                  Seguir
                </button>
                <button 
                  onClick={() => {
                    setSelectedHost(host)
                    setActiveView('profile')
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  Ver Perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Renderizar Sala de Áudio
  const renderRoom = () => {
    if (!selectedRoom) return null

    return (
      <div className="space-y-6">
        {/* Header da Sala */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={leaveRoom}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-medium">AO VIVO</span>
                <span className="text-purple-100">• {selectedRoom.duration}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">{selectedRoom.listeners}</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">{selectedRoom.title}</h1>
          <p className="text-purple-100">{selectedRoom.description}</p>
        </div>

        {/* Host e Co-hosts */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Host</h2>
          
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={selectedRoom.host.avatar} 
              alt={selectedRoom.host.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{selectedRoom.host.name}</h3>
                {selectedRoom.host.verified && (
                  <Crown className="w-5 h-5 text-yellow-500" />
                )}
              </div>
              <p className="text-gray-600">{selectedRoom.host.specialty}</p>
              <p className="text-sm text-gray-500">{selectedRoom.host.followers} seguidores</p>
            </div>
          </div>

          {selectedRoom.coHosts.length > 0 && (
            <>
              <h3 className="font-medium text-gray-900 mb-3">Co-hosts</h3>
              <div className="flex gap-4">
                {selectedRoom.coHosts.map((coHost, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img 
                      src={coHost.avatar} 
                      alt={coHost.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{coHost.name}</p>
                      <p className="text-xs text-gray-600">{coHost.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Palestrantes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Palestrantes ({selectedRoom.speakers.length})
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedRoom.speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-2">
                  <img 
                    src={speaker.avatar} 
                    alt={speaker.name}
                    className={`w-16 h-16 rounded-full object-cover mx-auto border-4 ${
                      speaker.isSpeaking ? 'border-green-500' : 'border-gray-200'
                    }`}
                  />
                  {speaker.isSpeaking && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Mic className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <p className="font-medium text-gray-900 text-sm">{speaker.name}</p>
                <p className="text-xs text-gray-600">{speaker.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Controles de Áudio */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                isMuted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
            
            <button 
              onClick={toggleHand}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                handRaised ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Hand className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => setShowChat(!showChat)}
              className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => shareOnWhatsApp(selectedRoom)}
              className="w-12 h-12 rounded-full bg-green-100 text-green-600 hover:bg-green-200 flex items-center justify-center transition-colors"
            >
              <Share2 className="w-6 h-6" />
            </button>
            
            {selectedRoom.supportEnabled && (
              <button 
                onClick={() => sendPixSupport(selectedRoom)}
                className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 flex items-center justify-center transition-colors"
              >
                <Gift className="w-6 h-6" />
              </button>
            )}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {handRaised ? 'Mão levantada - Aguarde ser chamado' : 'Levante a mão para falar'}
            </p>
          </div>
        </div>

        {/* Chat */}
        {showChat && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Chat da Sala</h2>
              <button 
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="h-64 overflow-y-auto mb-4 space-y-3">
              {selectedRoom.chatMessages.map((message) => (
                <div key={message.id} className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 text-sm">{message.user}</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
              />
              <button 
                onClick={sendChatMessage}
                disabled={!chatMessage.trim()}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Modal de Criar Nova Sala
  const CreateRoomModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Criar Nova Sala</h2>
          <button onClick={() => setShowCreateModal(false)}>
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          toast.success('Sala criada com sucesso!')
          setShowCreateModal(false)
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título da Sala</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Ex: Casos Complexos de Implantes Zigomáticos"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
              <textarea
                required
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Descreva o tema e objetivos da sala..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione...</option>
                  <option value="implantodontia">Implantodontia</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="estética">Estética</option>
                  <option value="marketing">Marketing</option>
                  <option value="gestão">Gestão</option>
                  <option value="endodontia">Endodontia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quando iniciar?</label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="now">Agora</option>
                  <option value="scheduled">Agendar</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Privacidade</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="public">Pública</option>
                  <option value="private">Privada</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Máximo de Ouvintes</label>
                <input
                  type="number"
                  min="10"
                  max="500"
                  defaultValue="100"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Co-hosts (opcional)</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Digite o nome ou email dos co-hosts..."
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-700">Gravar para replay</span>
              </label>
              
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-700">Permitir apoio via Pix</span>
              </label>
              
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-700">Enviar convites via WhatsApp</span>
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Criar Sala
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto">
      {activeView === 'home' && renderHome()}
      {activeView === 'room' && renderRoom()}
      
      {showCreateModal && <CreateRoomModal />}
    </div>
  )
}