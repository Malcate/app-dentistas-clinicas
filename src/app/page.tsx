"use client"

import { useState, useEffect } from 'react'
import { 
  Calendar, 
  Image, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Settings, 
  Plus, 
  Instagram, 
  Facebook, 
  Linkedin,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Upload,
  Palette,
  Sparkles,
  Bell,
  CheckCircle,
  Eye,
  Edit3,
  Trash2,
  CreditCard,
  LogOut,
  User,
  Shield,
  HelpCircle,
  Crown,
  Zap,
  Star,
  Check,
  X,
  UserPlus,
  DollarSign,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  MessageSquareText,
  ExternalLink,
  Save,
  Download,
  Wand2,
  Move,
  RotateCcw,
  Type,
  Layers,
  Grid,
  MousePointer,
  Square,
  Circle,
  Triangle,
  Smile,
  Camera,
  Brush,
  Scissors,
  Copy,
  Trash,
  ZoomIn,
  ZoomOut,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Lightbulb,
  BookOpen,
  Target,
  Briefcase,
  PieChart,
  LineChart,
  Activity,
  Link,
  Send,
  Bookmark,
  MoreHorizontal,
  Filter,
  Search,
  Globe,
  ShoppingCart,
  Package,
  Tag,
  Building,
  Truck,
  ShoppingBag,
  Store,
  Banknote,
  Receipt,
  FileText,
  Handshake,
  Award,
  Verified,
  BadgeCheck,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Calculator,
  Wallet,
  PiggyBank,
  Coins,
  Gem,
  Gift,
  Package2,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Info,
  ThumbsUp,
  ThumbsDown,
  MessageSquareMore,
  Reply,
  Forward,
  Share,
  Flag,
  MoreVertical,
  Edit,
  Archive,
  Pin,
  Mute,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Voicemail,
  MessageSquarePlus,
  MessageSquareReply,
  MessageSquareShare,
  MessageSquareX,
  MessageSquareCode,
  MessageSquareDot,
  MessageSquareHeart,
  MessageSquareOff,
  MessageSquareQuote,
  MessageSquareWarning,
  Stethoscope,
  Pill,
  Syringe,
  Thermometer,
  Bandage,
  Cross,
  HeartPulse,
  Brain,
  Bone,
  Dna,
  Microscope,
  TestTube,
  Clipboard,
  ClipboardCheck,
  ClipboardList,
  ClipboardX,
  FileCheck,
  FilePlus,
  FileX,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderX,
  Database,
  Server,
  HardDrive,
  Cpu,
  Memory,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Headphones,
  Speaker,
  Microphone,
  Film,
  FileImage,
  FileVideo,
  FileAudio,
  Music,
  Radio,
  Tv,
  Gamepad2,
  Joystick,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Spade,
  Club,
  Diamond,
  Puzzle,
  Trophy,
  Medal,
  Ribbon,
  Flame,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Umbrella,
  Rainbow,
  Snowflake,
  Droplets,
  Wind,
  Tornado,
  Volcano,
  Mountain,
  TreePine,
  Flower,
  Leaf,
  Seedling,
  Sprout,
  Cherry,
  Apple,
  Grape,
  Banana,
  Lemon,
  Orange,
  Strawberry,
  Carrot,
  Corn,
  Wheat,
  Coffee,
  Wine,
  Beer,
  Milk,
  Egg,
  Beef,
  Fish,
  Salad,
  Pizza,
  Sandwich,
  Cookie,
  Cake,
  IceCream,
  Candy,
  Lollipop,
  Donut,
  Croissant,
  Bagel,
  Pretzel,
  Popcorn,
  Nut,
  Honey,
  Salt,
  Pepper,
  Utensils,
  UtensilsCrossed,
  ChefHat,
  CookingPot,
  Refrigerator,
  Microwave,
  Oven,
  Blender,
  Scale,
  Timer,
  AlarmClock,
  Stopwatch,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarHeart,
  CalendarRange,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Sunrise,
  Sunset,
  SunMoon,
  MoonStar,
  CloudMoon,
  CloudSun,
  Cloudy,
  PartlyCloudy,
  CloudDrizzle,
  CloudHail,
  CloudRainWind,
  CloudSnowWind,
  Gauge,
  Barometer,
  Compass,
  Navigation,
  Navigation2,
  NavigationOff,
  Map,
  Locate,
  LocateFixed,
  LocateOff,
  Route,
  RouteOff,
  Milestone,
  Signpost,
  Construction,
  Hammer,
  Wrench,
  Screwdriver,
  Drill,
  Saw,
  Ruler,
  Paintbrush,
  PaintBucket,
  Pipette,
  Eraser,
  Pen,
  PenTool,
  Pencil,
  Highlighter,
  Marker,
  Crayon,
  Spray,
  Stamp,
  Sticker,
  Paperclip,
  Pushpin,
  Thumbtack,
  Magnet,
  Unlink,
  Chain,
  Anchor,
  Key,
  Lock,
  Unlock,
  LockKeyhole,
  ShieldCheck,
  ShieldX,
  ShieldAlert,
  ShieldQuestion,
  ShieldOff,
  EyeOff,
  Glasses,
  Sunglasses,
  Contact,
  Fingerprint,
  Scan,
  ScanLine,
  QrCode,
  Barcode,
  Hash,
  AtSign,
  Minus,
  Equal,
  NotEqual,
  Divide,
  Multiply,
  Binary,
  Infinity,
  Pi,
  Sigma,
  Function,
  Variable,
  Superscript,
  Subscript,
  Radical,
  SquareRoot,
  Exponent,
  Factorial,
  Integral,
  Derivative,
  Limit,
  Sum,
  Product,
  Union,
  Intersection,
  Subset,
  Superset,
  Element,
  NotElement,
  Angle,
  Pentagon,
  Hexagon,
  Octagon,
  Polygon,
  Rhombus,
  Parallelogram,
  Trapezoid,
  Ellipse,
  Oval,
  Rectangle,
  RectangleHorizontal,
  RectangleVertical,
  RoundedRectangle,
  Cube,
  Sphere,
  Cylinder,
  Cone,
  Pyramid,
  Prism,
  Torus,
  Dodecahedron,
  Icosahedron,
  Tetrahedron,
  Octahedron,
  Polyhedron,
  Bot,
  Headset,
  Wifi,
  WifiOff,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  Usb,
  SdCard,
  Disc,
  DiscAlbum,
  Disc2,
  Disc3,
  Cassette,
  Podcast,
  Rss,
  Antenna,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Radar,
  Satellite,
  SatelliteDish,
  Router,
  Network,
  Ethernet,
  Cable,
  Plug,
  PlugZap,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryWarning,
  Flashlight,
  FlashlightOff,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  LightbulbOff,
  Candle,
  Campfire,
  Fireplace,
  Bonfire,
  Sparkle,
  Stars,
  Comet,
  Meteor,
  Galaxy,
  Planet,
  Orbit,
  Rocket,
  Telescope,
  Atom,
  Molecule,
  TestTube2,
  TestTubes,
  Beaker,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  Tablets,
  Capsule,
  Siren,
  Ambulance,
  Hospital,
  Skull,
  Ear,
  Nose,
  Mouth,
  Teeth,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Worried,
  Sad,
  Happy,
  Neutral,
  Expressionless,
  Grimacing,
  Grinning,
  Beaming,
  Winking,
  Kissing,
  Hugging,
  Thinking,
  Shushing,
  Lying,
  Sneezing,
  Sick,
  Injured,
  Dizzy,
  Exploding,
  Cowboy,
  Partying,
  Disguised,
  Nerd,
  Monocle,
  Slightly,
  Upside,
  Money,
  MoneyOff,
  Safe,
  Vault,
  Ruby,
  Emerald,
  Sapphire,
  Pearl,
  Gold,
  Silver,
  Bronze,
  Platinum,
  Copper,
  Iron,
  Steel,
  Aluminum,
  Titanium,
  Carbon,
  Silicon,
  Oxygen,
  Hydrogen,
  Nitrogen,
  Helium,
  Neon,
  Argon,
  Krypton,
  Xenon,
  Radon,
  Lithium,
  Sodium,
  Potassium,
  Calcium,
  Magnesium,
  Beryllium,
  Boron,
  Fluorine,
  Chlorine,
  Bromine,
  Iodine,
  Astatine,
  Phosphorus,
  Sulfur,
  Selenium,
  Tellurium,
  Polonium
} from 'lucide-react'

export default function DentalSocialApp() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user, setUser] = useState<any>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login')
  const [showPricingModal, setShowPricingModal] = useState(false)
  const [showSupportChat, setShowSupportChat] = useState(false)
  const [supportMessages, setSupportMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [userSubscription, setUserSubscription] = useState<'free' | 'pro'>('free')
  const [isLoading, setIsLoading] = useState(false)
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [adminActiveSection, setAdminActiveSection] = useState('users')
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [gestaoActiveSection, setGestaoActiveSection] = useState('agenda')
  const [financasActiveSection, setFinancasActiveSection] = useState('orcamento')

  // Estados para sistema de notificações nativo
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
    timestamp: number;
  }>>([])

  // Estados para perfil do usuário
  const [userProfile, setUserProfile] = useState({
    name: 'Dr. João Silva',
    email: 'joao@clinica.com',
    phone: '(11) 99999-9999',
    specialty: 'Ortodontia',
    crm: 'CRO-SP 12345',
    clinic: 'Clínica Sorriso Perfeito',
    address: 'Rua das Flores, 123 - Centro',
    bio: 'Especialista em ortodontia com mais de 10 anos de experiência.'
  })

  // Estados para dados simulados
  const [users, setUsers] = useState([
    { id: 1, name: 'Dr. João Silva', email: 'joao@clinica.com', role: 'Dentista', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Dra. Maria Santos', email: 'maria@clinica.com', role: 'Ortodontista', status: 'active', joinDate: '2024-01-20' },
    { id: 3, name: 'Dr. Pedro Costa', email: 'pedro@clinica.com', role: 'Implantodontista', status: 'inactive', joinDate: '2024-02-01' }
  ])

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Dra. Ana Silva',
      specialty: 'Ortodontia',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      time: '2h',
      content: 'Acabei de finalizar um caso complexo de ortodontia! O sorriso da paciente ficou perfeito. É gratificante ver a transformação e a autoestima renovada. 😊🦷',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=400&fit=crop',
      likes: 24,
      comments: 8,
      shares: 3,
      liked: false
    },
    {
      id: 2,
      author: 'Dr. Carlos Mendes',
      specialty: 'Implantodontia',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      time: '4h',
      content: 'Dica importante: A higienização adequada dos implantes é fundamental para sua longevidade. Sempre oriento meus pacientes sobre a técnica correta.',
      likes: 18,
      comments: 12,
      shares: 7,
      liked: true
    },
    {
      id: 3,
      author: 'Dra. Fernanda Lima',
      specialty: 'Odontopediatria',
      avatar: 'https://images.unsplash.com/photo-1594824475317-29bb4b1e2c8e?w=100&h=100&fit=crop&crop=face',
      time: '6h',
      content: 'Atendimento infantil requer paciência e carinho especial. Hoje consegui que uma criança de 5 anos fizesse seu primeiro tratamento sem medo! 👶🦷',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop',
      likes: 31,
      comments: 15,
      shares: 5,
      liked: false
    }
  ])

  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Cadeira Odontológica Gnatus G3',
      price: 15000,
      condition: 'Novo',
      seller: 'Dental Supply Pro',
      location: 'São Paulo, SP',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=200&fit=crop',
      category: 'Equipamentos',
      description: 'Cadeira odontológica completa com refletor LED e sugador',
      rating: 4.8,
      reviews: 23
    },
    {
      id: 2,
      title: 'Kit Instrumentos Cirúrgicos',
      price: 850,
      condition: 'Usado',
      seller: 'Dr. Roberto Alves',
      location: 'Rio de Janeiro, RJ',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop',
      category: 'Instrumentos',
      description: 'Kit completo de instrumentos cirúrgicos em excelente estado',
      rating: 4.5,
      reviews: 12
    },
    {
      id: 3,
      title: 'Consultório Completo - Venda',
      price: 45000,
      condition: 'Usado',
      seller: 'Clínica Dental Center',
      location: 'Belo Horizonte, MG',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=200&fit=crop',
      category: 'Consultório',
      description: 'Consultório odontológico completo, equipado e pronto para uso',
      rating: 4.9,
      reviews: 8
    },
    {
      id: 4,
      title: 'Serviço de Marketing Digital',
      price: 1200,
      condition: 'Serviço',
      seller: 'Dental Marketing Pro',
      location: 'Online',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      category: 'Serviços',
      description: 'Gestão completa de redes sociais para clínicas odontológicas',
      rating: 4.7,
      reviews: 34
    }
  ])

  // Estados para a aba Dicas
  const [activeCategory, setActiveCategory] = useState('gestao')
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  // Função para mostrar notificações
  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now()
    const notification = { id, message, type, timestamp: id }
    
    setNotifications(prev => [...prev, notification])
    
    // Auto-remover após 4 segundos
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 4000)
  }

  // Email do administrador - APENAS este email terá acesso ao painel Admin
  const ADMIN_EMAIL = 'malcate2@hotmail.com'

  // Verificar se o usuário é administrador
  const isAdmin = user?.email === ADMIN_EMAIL

  // Funções de autenticação simplificadas
  const handleLogin = async (email: string, password: string) => {
    // Simular login
    setUser({ id: '1', email, name: 'Usuário Teste' })
    setShowAuthModal(false)
    showNotification('Login realizado com sucesso!', 'success')
  }

  const handleRegister = async (email: string, password: string, name: string) => {
    // Simular registro
    setUser({ id: '1', email, name })
    setShowAuthModal(false)
    showNotification('Conta criada com sucesso!', 'success')
  }

  const handleForgotPassword = async (email: string) => {
    showNotification('Email de recuperação enviado!', 'success')
  }

  const handleLogout = async () => {
    setUser(null)
    setActiveTab('dashboard')
    showNotification('Logout realizado!', 'success')
  }

  // Função para enviar mensagem de suporte
  const sendSupportMessage = async () => {
    if (!newMessage.trim() || !user) {
      showNotification('Digite uma mensagem', 'error')
      return
    }

    const newMsg = {
      id: Date.now(),
      user_id: user.id,
      clinic_id: 'default',
      message: newMessage,
      is_admin_reply: false,
      created_at: new Date().toISOString()
    }
    setSupportMessages([...supportMessages, newMsg])
    setNewMessage('')
    showNotification('Mensagem enviada!', 'success')
  }

  // Funções para interação com posts
  const handleLikePost = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  const handleAddUser = (userData: any) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0]
    }
    setUsers([...users, newUser])
    setShowAddUserModal(false)
    showNotification('Usuário adicionado com sucesso!', 'success')
  }

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId))
    showNotification('Usuário removido com sucesso!', 'success')
  }

  const handleSaveProfile = (profileData: any) => {
    setUserProfile(profileData)
    setShowProfileModal(false)
    showNotification('Perfil atualizado com sucesso!', 'success')
  }

  // Dados simulados para gráficos de evolução
  const evolutionData = {
    users: [
      { month: 'Jan', value: 45 },
      { month: 'Fev', value: 52 },
      { month: 'Mar', value: 61 },
      { month: 'Abr', value: 73 },
      { month: 'Mai', value: 89 },
      { month: 'Jun', value: 156 }
    ],
    revenue: [
      { month: 'Jan', value: 12500 },
      { month: 'Fev', value: 15800 },
      { month: 'Mar', value: 19200 },
      { month: 'Abr', value: 24600 },
      { month: 'Mai', value: 32400 },
      { month: 'Jun', value: 45200 }
    ],
    social: [
      { month: 'Jan', value: 23 },
      { month: 'Fev', value: 31 },
      { month: 'Mar', value: 42 },
      { month: 'Abr', value: 58 },
      { month: 'Mai', value: 87 },
      { month: 'Jun', value: 126 }
    ],
    market: [
      { month: 'Jan', value: 3200 },
      { month: 'Fev', value: 4100 },
      { month: 'Mar', value: 5800 },
      { month: 'Abr', value: 7200 },
      { month: 'Mai', value: 9600 },
      { month: 'Jun', value: 12800 }
    ]
  }

  // Dados simulados para Gestão da Clínica
  const gestaoData = {
    appointments: [
      { id: 1, patient: 'Maria Silva', time: '09:00', procedure: 'Limpeza', status: 'confirmed' },
      { id: 2, patient: 'João Santos', time: '10:30', procedure: 'Restauração', status: 'confirmed' },
      { id: 3, patient: 'Ana Costa', time: '14:00', procedure: 'Canal', status: 'pending' },
      { id: 4, patient: 'Pedro Alves', time: '15:30', procedure: 'Extração', status: 'confirmed' },
      { id: 5, patient: 'Carla Lima', time: '17:00', procedure: 'Consulta', status: 'pending' }
    ],
    financialData: {
      revenue: 45200,
      expenses: 28400,
      profit: 16800,
      pending: 8500
    },
    patients: {
      total: 342,
      new: 28,
      returning: 156,
      inactive: 158
    },
    procedures: [
      { name: 'Limpeza', count: 45, revenue: 6750 },
      { name: 'Restauração', count: 32, revenue: 9600 },
      { name: 'Canal', count: 18, revenue: 14400 },
      { name: 'Extração', count: 12, revenue: 3600 },
      { name: 'Implante', count: 8, revenue: 24000 }
    ]
  }

  // Dados simulados para Finanças Pessoais
  const financasData = {
    saldoTotal: 45800,
    receitaMensal: 12500,
    despesaMensal: 8200,
    economiasMensal: 4300,
    investimentos: 125000,
    objetivos: [
      { id: 1, nome: 'Reserva de Emergência', meta: 50000, atual: 35000, prazo: '2024-12' },
      { id: 2, nome: 'Viagem Internacional', meta: 15000, atual: 8500, prazo: '2024-07' },
      { id: 3, nome: 'Carro Novo', meta: 80000, atual: 42000, prazo: '2025-06' }
    ],
    despesasPorCategoria: [
      { categoria: 'Moradia', valor: 2500, percentual: 30 },
      { categoria: 'Alimentação', valor: 1800, percentual: 22 },
      { categoria: 'Transporte', valor: 1200, percentual: 15 },
      { categoria: 'Lazer', valor: 800, percentual: 10 },
      { categoria: 'Saúde', valor: 600, percentual: 7 },
      { categoria: 'Outros', valor: 1300, percentual: 16 }
    ]
  }

  // Modal de Perfil
  const ProfileModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Editar Perfil</h2>
          <button onClick={() => setShowProfileModal(false)}>
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const profileData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            specialty: formData.get('specialty') as string,
            crm: formData.get('crm') as string,
            clinic: formData.get('clinic') as string,
            address: formData.get('address') as string,
            bio: formData.get('bio') as string
          }
          handleSaveProfile(profileData)
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
              <input
                name="name"
                type="text"
                defaultValue={userProfile.name}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                name="email"
                type="email"
                defaultValue={userProfile.email}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
              <input
                name="phone"
                type="tel"
                defaultValue={userProfile.phone}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Especialidade</label>
              <input
                name="specialty"
                type="text"
                defaultValue={userProfile.specialty}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CRM/CRO</label>
              <input
                name="crm"
                type="text"
                defaultValue={userProfile.crm}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Clínica</label>
              <input
                name="clinic"
                type="text"
                defaultValue={userProfile.clinic}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Endereço</label>
            <input
              name="address"
              type="text"
              defaultValue={userProfile.address}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Biografia</label>
            <textarea
              name="bio"
              rows={3}
              defaultValue={userProfile.bio}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Conte um pouco sobre sua experiência profissional..."
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowProfileModal(false)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Salvar Perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  // Modal de Adicionar Usuário
  const AddUserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Adicionar Usuário</h2>
          <button onClick={() => setShowAddUserModal(false)}>
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const userData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            role: formData.get('role') as string
          }
          handleAddUser(userData)
        }}>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              <input
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nome do usuário"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@exemplo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Função</label>
              <select
                name="role"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione uma função</option>
                <option value="Dentista">Dentista</option>
                <option value="Ortodontista">Ortodontista</option>
                <option value="Implantodontista">Implantodontista</option>
                <option value="Endodontista">Endodontista</option>
                <option value="Periodontista">Periodontista</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowAddUserModal(false)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  // Modal de Autenticação
  const AuthModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {authMode === 'login' ? 'Entrar' : 
             authMode === 'register' ? 'Criar Conta' : 'Recuperar Senha'}
          </h2>
          <button onClick={() => setShowAuthModal(false)}>
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const email = formData.get('email') as string
          const password = formData.get('password') as string
          const name = formData.get('name') as string

          if (authMode === 'login') {
            handleLogin(email, password)
          } else if (authMode === 'register') {
            handleRegister(email, password, name)
          } else {
            handleForgotPassword(email)
          }
        }}>
          {authMode === 'register' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              <input
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="seu@email.com"
            />
          </div>

          {authMode !== 'forgot' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                name="password"
                type="password"
                required
                minLength={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Sua senha (mín. 6 caracteres)"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {authMode === 'login' ? 'Entrar' : 
             authMode === 'register' ? 'Criar Conta' : 'Enviar Email'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          {authMode === 'login' && (
            <>
              <button
                onClick={() => setAuthMode('forgot')}
                className="text-blue-600 hover:underline text-sm"
              >
                Esqueci minha senha
              </button>
              <div>
                <span className="text-gray-600 text-sm">Não tem conta? </span>
                <button
                  onClick={() => setAuthMode('register')}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Criar conta
                </button>
              </div>
            </>
          )}
          
          {(authMode === 'register' || authMode === 'forgot') && (
            <button
              onClick={() => setAuthMode('login')}
              className="text-blue-600 hover:underline text-sm"
            >
              Voltar ao login
            </button>
          )}
        </div>
      </div>
    </div>
  )

  // Modal de Preços
  const PricingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Escolha seu Plano</h2>
          <button onClick={() => setShowPricingModal(false)}>
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-gray-200 rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gratuito</h3>
              <div className="text-3xl font-bold text-gray-900">
                Grátis
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Acesso básico ao Dental Social</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Visualização de dicas</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Suporte por email</span>
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg font-medium transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200">
              Começar Grátis
            </button>
          </div>

          <div className="border-2 border-blue-500 bg-blue-50 rounded-2xl p-6">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Mais Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profissional</h3>
              <div className="text-3xl font-bold text-gray-900">
                R$ 39,90
                <span className="text-lg text-gray-600">/mês</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Acesso completo ao Dental Social</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Acesso ao Dental Mercado</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Todas as dicas e conteúdos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Relatórios avançados</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Suporte prioritário</span>
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
              Assinar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Chat de Suporte
  const SupportChat = () => (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium">Suporte</span>
        </div>
        <button onClick={() => setShowSupportChat(false)}>
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {supportMessages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p>Como podemos ajudar?</p>
          </div>
        ) : (
          supportMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.is_admin_reply ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                msg.is_admin_reply 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'bg-blue-600 text-white'
              }`}>
                {msg.message}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && sendSupportMessage()}
          />
          <button
            onClick={sendSupportMessage}
            disabled={!newMessage.trim()}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header com estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Usuários Ativos</p>
              <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.status === 'active').length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Posts Publicados</p>
              <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Produtos no Mercado</p>
              <p className="text-2xl font-bold text-gray-900">{products.length}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <ShoppingCart className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Dicas Disponíveis</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bem-vindo */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Bem-vindo ao Dental Social!</h1>
            <p className="text-blue-100 text-lg">
              Plataforma completa para profissionais da odontologia
            </p>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Smile className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Atividade Recente */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Atividade Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Novo usuário cadastrado</p>
              <p className="text-sm text-gray-600">Dra. Maria Santos se juntou à plataforma</p>
            </div>
            <span className="text-sm text-gray-500">2h atrás</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Novo post publicado</p>
              <p className="text-sm text-gray-600">Dr. Carlos compartilhou dicas sobre implantes</p>
            </div>
            <span className="text-sm text-gray-500">4h atrás</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Produto vendido</p>
              <p className="text-sm text-gray-600">Kit de instrumentos cirúrgicos foi vendido</p>
            </div>
            <span className="text-sm text-gray-500">6h atrás</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAdmin = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Painel Administrativo</h2>
        
        {/* Navegação do Admin */}
        <div className="flex gap-2 mb-6 bg-gray-50 p-2 rounded-xl overflow-x-auto">
          {[
            { id: 'users', label: 'Usuários', icon: Users },
            { id: 'revenue', label: 'Receita', icon: DollarSign },
            { id: 'social', label: 'Dental Social', icon: MessageSquare },
            { id: 'market', label: 'Dental Mercado', icon: ShoppingCart }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setAdminActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                adminActiveSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <section.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo do Admin */}
        {adminActiveSection === 'users' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Gestão de Usuários</h3>
              <button
                onClick={() => setShowAddUserModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Adicionar Usuário
              </button>
            </div>

            {/* Gráfico de Evolução de Usuários */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Evolução de Usuários
              </h4>
              <div className="flex items-end justify-between h-48 gap-2">
                {evolutionData.users.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-blue-600 rounded-t-lg hover:bg-blue-700 transition-colors relative group" 
                         style={{ height: `${(data.value / 156) * 100}%` }}>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.value} usuários
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{data.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-600">Total: <strong className="text-gray-900">156 usuários</strong></span>
                <span className="text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  +75% nos últimos 6 meses
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usuário
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Função
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data de Cadastro
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status === 'active' ? 'Ativo' : 'Inativo'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(user.joinDate).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {adminActiveSection === 'revenue' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Gestão de Receita</h3>
            
            {/* Gráfico de Evolução de Receita */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Evolução de Receita
              </h4>
              <div className="flex items-end justify-between h-48 gap-2">
                {evolutionData.revenue.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-green-600 rounded-t-lg hover:bg-green-700 transition-colors relative group" 
                         style={{ height: `${(data.value / 45200) * 100}%` }}>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        R$ {(data.value / 1000).toFixed(1)}k
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{data.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-600">Total: <strong className="text-gray-900">R$ 45.2k</strong></span>
                <span className="text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  +262% nos últimos 6 meses
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-green-600">R$ 45.2k</div>
                    <div className="text-sm text-gray-600">Receita Total</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12% este mês</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-blue-600">156</div>
                    <div className="text-sm text-gray-600">Assinantes Ativos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+8% este mês</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-purple-600">R$ 12.8k</div>
                    <div className="text-sm text-gray-600">Vendas Mercado</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+15% este mês</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {adminActiveSection === 'social' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Dental Social - Estatísticas</h3>
            
            {/* Gráfico de Evolução do Dental Social */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Evolução de Posts
              </h4>
              <div className="flex items-end justify-between h-48 gap-2">
                {evolutionData.social.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-purple-600 rounded-t-lg hover:bg-purple-700 transition-colors relative group" 
                         style={{ height: `${(data.value / 126) * 100}%` }}>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.value} posts
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{data.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-600">Total: <strong className="text-gray-900">126 posts</strong></span>
                <span className="text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  +448% nos últimos 6 meses
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-4">Posts por Especialidade</h4>
                <div className="space-y-3">
                  {[
                    { specialty: 'Ortodontia', count: 45, color: 'bg-blue-500' },
                    { specialty: 'Implantodontia', count: 32, color: 'bg-green-500' },
                    { specialty: 'Odontopediatria', count: 28, color: 'bg-purple-500' },
                    { specialty: 'Endodontia', count: 21, color: 'bg-orange-500' }
                  ].map((item) => (
                    <div key={item.specialty} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="text-sm text-gray-700">{item.specialty}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-4">Engajamento</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total de Likes</span>
                    <span className="text-lg font-bold text-gray-900">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total de Comentários</span>
                    <span className="text-lg font-bold text-gray-900">456</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total de Compartilhamentos</span>
                    <span className="text-lg font-bold text-gray-900">123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {adminActiveSection === 'market' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Dental Mercado - Estatísticas</h3>
            
            {/* Gráfico de Evolução do Dental Mercado */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                Evolução de Vendas
              </h4>
              <div className="flex items-end justify-between h-48 gap-2">
                {evolutionData.market.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-orange-600 rounded-t-lg hover:bg-orange-700 transition-colors relative group" 
                         style={{ height: `${(data.value / 12800) * 100}%` }}>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        R$ {(data.value / 1000).toFixed(1)}k
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{data.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-600">Total: <strong className="text-gray-900">R$ 12.8k</strong></span>
                <span className="text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  +300% nos últimos 6 meses
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-4">Produtos por Categoria</h4>
                <div className="space-y-3">
                  {[
                    { category: 'Equipamentos', count: 12, color: 'bg-blue-500' },
                    { category: 'Instrumentos', count: 8, color: 'bg-green-500' },
                    { category: 'Consultório', count: 5, color: 'bg-purple-500' },
                    { category: 'Serviços', count: 3, color: 'bg-orange-500' }
                  ].map((item) => (
                    <div key={item.category} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="text-sm text-gray-700">{item.category}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-4">Vendas</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Produtos Vendidos</span>
                    <span className="text-lg font-bold text-gray-900">28</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Valor Total</span>
                    <span className="text-lg font-bold text-gray-900">R$ 12.8k</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Comissão Plataforma</span>
                    <span className="text-lg font-bold text-gray-900">R$ 1.28k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderDicas = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dicas Profissionais</h1>
            <p className="text-emerald-100 text-lg">
              Conteúdo especializado para o sucesso da sua clínica odontológica
            </p>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Lightbulb className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Navegação por Categorias */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'gestao', label: 'Gestão de Clínicas', icon: Building, color: 'blue' },
            { id: 'marketing', label: 'Marketing', icon: Target, color: 'green' },
            { id: 'marketing-pessoal', label: 'Marketing Pessoal', icon: User, color: 'purple' },
            { id: 'financeiro', label: 'Administração Financeira', icon: Calculator, color: 'orange' }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                activeCategory === category.id
                  ? `bg-${category.color}-600 text-white`
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Conteúdo Principal */}
        <div className="lg:col-span-3 space-y-6">
          {/* Gestão de Clínicas */}
          {activeCategory === 'gestao' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Gestão de Clínicas Odontológicas</h2>
                </div>

                <div className="space-y-8">
                  {/* Planejamento Estratégico */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Planejamento Estratégico</h3>
                    <p className="text-gray-700 mb-4">
                      O planejamento estratégico é fundamental para o crescimento sustentável da sua clínica. 
                      Defina objetivos claros e metas mensuráveis para orientar suas decisões.
                    </p>
                    
                    <div className="bg-blue-50 rounded-xl p-6 mb-4">
                      <h4 className="font-semibold text-blue-900 mb-3">Definição de Metas SMART</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Específicas:</strong> Aumentar o faturamento em 20% no próximo ano</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Mensuráveis:</strong> Atender 50 novos pacientes por mês</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Atingíveis:</strong> Baseadas na capacidade atual da clínica</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Relevantes:</strong> Alinhadas com a visão da clínica</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Temporais:</strong> Com prazos definidos para execução</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Análise SWOT</h5>
                        <p className="text-sm text-gray-600">
                          Avalie Forças, Fraquezas, Oportunidades e Ameaças para sua clínica
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Plano de Ação</h5>
                        <p className="text-sm text-gray-600">
                          Defina ações específicas, responsáveis e prazos para cada objetivo
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gestão de Equipe */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Gestão de Equipe</h3>
                    <p className="text-gray-700 mb-4">
                      Uma equipe motivada e bem treinada é essencial para o sucesso da clínica. 
                      Invista no desenvolvimento dos seus colaboradores.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-green-50 rounded-xl p-6">
                        <h4 className="font-semibold text-green-900 mb-3">Recrutamento e Seleção</h4>
                        <ul className="space-y-2 text-green-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Defina perfis claros para cada função</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Utilize entrevistas comportamentais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Verifique referências profissionais</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 rounded-xl p-6">
                        <h4 className="font-semibold text-yellow-900 mb-3">Treinamento e Desenvolvimento</h4>
                        <ul className="space-y-2 text-yellow-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span>Programa de integração para novos funcionários</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span>Treinamentos técnicos regulares</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span>Desenvolvimento de soft skills</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Atendimento ao Cliente */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Atendimento ao Cliente</h3>
                    <p className="text-gray-700 mb-4">
                      A satisfação do paciente é prioridade máxima. Um atendimento excepcional 
                      gera fidelização e indicações.
                    </p>

                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="font-semibold text-purple-900 mb-3">Protocolo de Atendimento</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Phone className="w-6 h-6 text-purple-600" />
                          </div>
                          <h5 className="font-medium text-purple-900">Primeiro Contato</h5>
                          <p className="text-sm text-purple-700">Atendimento cordial e informativo</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Calendar className="w-6 h-6 text-purple-600" />
                          </div>
                          <h5 className="font-medium text-purple-900">Agendamento</h5>
                          <p className="text-sm text-purple-700">Processo simples e eficiente</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Heart className="w-6 h-6 text-purple-600" />
                          </div>
                          <h5 className="font-medium text-purple-900">Pós-atendimento</h5>
                          <p className="text-sm text-purple-700">Follow-up e cuidado contínuo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Marketing */}
          {activeCategory === 'marketing' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Marketing para Clínicas Odontológicas</h2>
                </div>

                <div className="space-y-8">
                  {/* Marketing Digital */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Marketing Digital</h3>
                    <p className="text-gray-700 mb-4">
                      O marketing digital é essencial para atrair novos pacientes e manter relacionamento 
                      com os atuais. Utilize as ferramentas digitais de forma estratégica.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Globe className="w-6 h-6 text-blue-600" />
                          <h4 className="font-semibold text-blue-900">Website e SEO</h4>
                        </div>
                        <ul className="space-y-2 text-blue-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Site responsivo e otimizado</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Conteúdo relevante e atualizado</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Otimização para buscas locais</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-pink-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Instagram className="w-6 h-6 text-pink-600" />
                          <h4 className="font-semibold text-pink-900">Redes Sociais</h4>
                        </div>
                        <ul className="space-y-2 text-pink-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                            <span>Conteúdo educativo regular</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                            <span>Interação com seguidores</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                            <span>Stories e posts interativos</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Branding */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Branding</h3>
                    <p className="text-gray-700 mb-4">
                      Construa uma marca forte e reconhecível que transmita confiança e profissionalismo.
                    </p>

                    <div className="bg-indigo-50 rounded-xl p-6">
                      <h4 className="font-semibold text-indigo-900 mb-4">Elementos da Marca</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Palette className="w-6 h-6 text-indigo-600" />
                          </div>
                          <h5 className="font-medium text-indigo-900">Identidade Visual</h5>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <MessageSquare className="w-6 h-6 text-indigo-600" />
                          </div>
                          <h5 className="font-medium text-indigo-900">Tom de Voz</h5>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Award className="w-6 h-6 text-indigo-600" />
                          </div>
                          <h5 className="font-medium text-indigo-900">Valores</h5>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Target className="w-6 h-6 text-indigo-600" />
                          </div>
                          <h5 className="font-medium text-indigo-900">Posicionamento</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parcerias e Networking */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Parcerias e Networking</h3>
                    <p className="text-gray-700 mb-4">
                      Estabeleça relacionamentos estratégicos para expandir sua rede de contatos e referências.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-orange-50 rounded-xl p-4">
                        <Handshake className="w-8 h-8 text-orange-600 mb-3" />
                        <h4 className="font-semibold text-orange-900 mb-2">Parcerias Médicas</h4>
                        <p className="text-sm text-orange-700">
                          Relacionamento com médicos e outros especialistas
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4">
                        <Building className="w-8 h-8 text-orange-600 mb-3" />
                        <h4 className="font-semibold text-orange-900 mb-2">Empresas Locais</h4>
                        <p className="text-sm text-orange-700">
                          Convênios e parcerias com empresas da região
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4">
                        <Users className="w-8 h-8 text-orange-600 mb-3" />
                        <h4 className="font-semibold text-orange-900 mb-2">Eventos Profissionais</h4>
                        <p className="text-sm text-orange-700">
                          Participação em congressos e encontros
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Marketing Pessoal */}
          {activeCategory === 'marketing-pessoal' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Marketing Pessoal para Dentistas</h2>
                </div>

                <div className="space-y-8">
                  {/* Desenvolvimento de Carreira */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Desenvolvimento de Carreira</h3>
                    <p className="text-gray-700 mb-4">
                      Invista continuamente no seu desenvolvimento profissional para se destacar no mercado.
                    </p>

                    <div className="bg-purple-50 rounded-xl p-6 mb-4">
                      <h4 className="font-semibold text-purple-900 mb-3">Especialização e Educação Continuada</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-purple-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Cursos de especialização reconhecidos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Participação em congressos nacionais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Certificações internacionais</span>
                          </li>
                        </ul>
                        <ul className="space-y-2 text-purple-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Workshops práticos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Cursos online especializados</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>Mentoria com profissionais experientes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Presença Online */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Presença Online</h3>
                    <p className="text-gray-700 mb-4">
                      Construa uma presença digital profissional e atraente que reflita sua expertise.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Linkedin className="w-6 h-6 text-blue-600" />
                          <h4 className="font-semibold text-blue-900">LinkedIn Profissional</h4>
                        </div>
                        <ul className="space-y-2 text-blue-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Perfil completo e otimizado</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Artigos técnicos regulares</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Networking ativo</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <BookOpen className="w-6 h-6 text-green-600" />
                          <h4 className="font-semibold text-green-900">Conteúdo Educativo</h4>
                        </div>
                        <ul className="space-y-2 text-green-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Blog com dicas de saúde bucal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Vídeos educativos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Webinars e lives</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Comunicação Eficaz */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Comunicação Eficaz</h3>
                    <p className="text-gray-700 mb-4">
                      Desenvolva habilidades de comunicação para melhorar o relacionamento com pacientes e colegas.
                    </p>

                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h4 className="font-semibold text-yellow-900 mb-4">Técnicas de Comunicação</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Ear className="w-6 h-6 text-yellow-600" />
                          </div>
                          <h5 className="font-medium text-yellow-900">Escuta Ativa</h5>
                          <p className="text-sm text-yellow-700">Compreenda as necessidades do paciente</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <MessageSquare className="w-6 h-6 text-yellow-600" />
                          </div>
                          <h5 className="font-medium text-yellow-900">Linguagem Clara</h5>
                          <p className="text-sm text-yellow-700">Explique procedimentos de forma simples</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Heart className="w-6 h-6 text-yellow-600" />
                          </div>
                          <h5 className="font-medium text-yellow-900">Empatia</h5>
                          <p className="text-sm text-yellow-700">Demonstre compreensão e cuidado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Administração Financeira */}
          {activeCategory === 'financeiro' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Administração Financeira</h2>
                </div>

                <div className="space-y-8">
                  {/* Gestão de Custos */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Gestão de Custos</h3>
                    <p className="text-gray-700 mb-4">
                      Controle rigoroso dos custos é fundamental para a sustentabilidade financeira da clínica.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-xl p-6">
                        <h4 className="font-semibold text-red-900 mb-3">Custos Fixos</h4>
                        <ul className="space-y-2 text-red-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Aluguel e condomínio</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Salários e encargos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Seguros e licenças</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>Financiamentos de equipamentos</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-semibold text-blue-900 mb-3">Custos Variáveis</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Materiais odontológicos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Laboratório protético</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Marketing e publicidade</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Comissões e bonificações</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-6 mt-4">
                      <h4 className="font-semibold text-orange-900 mb-3">Estratégias de Redução de Custos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Handshake className="w-6 h-6 text-orange-600" />
                          </div>
                          <h5 className="font-medium text-orange-900">Negociação</h5>
                          <p className="text-sm text-orange-700">Com fornecedores e prestadores</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Package className="w-6 h-6 text-orange-600" />
                          </div>
                          <h5 className="font-medium text-orange-900">Compras em Grupo</h5>
                          <p className="text-sm text-orange-700">Parcerias para melhor preço</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Activity className="w-6 h-6 text-orange-600" />
                          </div>
                          <h5 className="font-medium text-orange-900">Controle de Estoque</h5>
                          <p className="text-sm text-orange-700">Evitar desperdícios</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Planejamento Financeiro */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Planejamento Financeiro</h3>
                    <p className="text-gray-700 mb-4">
                      Um planejamento financeiro sólido garante a sustentabilidade e crescimento da clínica.
                    </p>

                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="font-semibold text-green-900 mb-4">Fluxo de Caixa</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-green-200">
                          <h5 className="font-medium text-green-900 mb-2">Entradas</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Consultas e procedimentos</li>
                            <li>• Convênios e planos</li>
                            <li>• Produtos vendidos</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-green-200">
                          <h5 className="font-medium text-green-900 mb-2">Saídas</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Custos operacionais</li>
                            <li>• Salários e encargos</li>
                            <li>• Impostos e taxas</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-green-200">
                          <h5 className="font-medium text-green-900 mb-2">Saldo</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Resultado mensal</li>
                            <li>• Reserva de emergência</li>
                            <li>• Investimentos futuros</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Investimentos */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Investimentos</h3>
                    <p className="text-gray-700 mb-4">
                      Invista estrategicamente em tecnologias e equipamentos que agreguem valor à clínica.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 rounded-xl p-6">
                        <h4 className="font-semibold text-purple-900 mb-3">Análise de ROI</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                              <Calculator className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-purple-900">Custo vs Benefício</h5>
                              <p className="text-sm text-purple-700">Avalie o retorno esperado</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                              <Clock className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-purple-900">Prazo de Retorno</h5>
                              <p className="text-sm text-purple-700">Tempo para recuperar investimento</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-teal-50 rounded-xl p-6">
                        <h4 className="font-semibold text-teal-900 mb-3">Prioridades de Investimento</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                            <span className="text-sm text-teal-800">Equipamentos essenciais</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                            <span className="text-sm text-teal-800">Tecnologia diagnóstica</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                            <span className="text-sm text-teal-800">Conforto do paciente</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-teal-300 rounded-full"></div>
                            <span className="text-sm text-teal-800">Marketing e divulgação</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar com Recursos Adicionais */}
        <div className="space-y-6">
          {/* Ferramentas Recomendadas */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ferramentas Recomendadas</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Agendamento</div>
                  <div className="text-sm text-gray-600">Doctoralia, iClinic</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Financeiro</div>
                  <div className="text-sm text-gray-600">ContaAzul, QuickBooks</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Marketing</div>
                  <div className="text-sm text-gray-600">Mailchimp, Canva</div>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas Importantes */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">KPIs Essenciais</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="font-medium text-gray-900">Taxa de Ocupação</div>
                <div className="text-sm text-gray-600">Meta: 80-90%</div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-medium text-gray-900">Ticket Médio</div>
                <div className="text-sm text-gray-600">Acompanhe mensalmente</div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="font-medium text-gray-900">Taxa de Retorno</div>
                <div className="text-sm text-gray-600">Meta: 70-80%</div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <div className="font-medium text-gray-900">Margem de Lucro</div>
                <div className="text-sm text-gray-600">Meta: 20-30%</div>
              </div>
            </div>
          </div>

          {/* Recursos de Aprendizado */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Aprendendo</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Cursos Online</div>
                  <div className="text-sm text-gray-600">Gestão e Marketing</div>
                </div>
              </a>

              <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Users className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Comunidade</div>
                  <div className="text-sm text-gray-600">Fórum de Discussão</div>
                </div>
              </a>

              <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FileText className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Templates</div>
                  <div className="text-sm text-gray-600">Planilhas e Modelos</div>
                </div>
              </a>
            </div>
          </div>

          {/* Vídeos e Tutoriais */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vídeos e Tutoriais</h3>
            <div className="space-y-3">
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Video className="w-5 h-5 text-red-600" />
                  <h4 className="font-medium text-red-900">Como Precificar Procedimentos</h4>
                </div>
                <p className="text-sm text-red-700">Tutorial completo sobre precificação estratégica</p>
                <div className="mt-2">
                  <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">15 min</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Play className="w-5 h-5 text-blue-600" />
                  <h4 className="font-medium text-blue-900">Marketing Digital para Dentistas</h4>
                </div>
                <p className="text-sm text-blue-700">Estratégias práticas para redes sociais</p>
                <div className="mt-2">
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">22 min</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Film className="w-5 h-5 text-green-600" />
                  <h4 className="font-medium text-green-900">Gestão de Equipe Eficaz</h4>
                </div>
                <p className="text-sm text-green-700">Como liderar e motivar sua equipe</p>
                <div className="mt-2">
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">18 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDentalSocial = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Dental Social</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Novo Post
          </button>
        </div>
        <p className="text-gray-600">Rede social exclusiva para profissionais da odontologia</p>
      </div>

      {/* Feed de Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {/* Header do Post */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{post.author}</h3>
                  <BadgeCheck className="w-4 h-4 text-blue-500" />
                </div>
                <p className="text-sm text-gray-600">{post.specialty} • {post.time}</p>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo do Post */}
            <div className="mb-4">
              <p className="text-gray-900 mb-4">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-64 object-cover rounded-xl"
                />
              )}
            </div>

            {/* Ações do Post */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleLikePost(post.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    post.liked
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>

                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>

                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">{post.shares}</span>
                </button>
              </div>

              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderDentalMercado = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Dental Mercado</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Anunciar Produto
          </button>
        </div>
        <p className="text-gray-600">Marketplace exclusivo para produtos e serviços odontológicos</p>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Filtros:</span>
          </div>
          
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option>Todas as Categorias</option>
            <option>Equipamentos</option>
            <option>Instrumentos</option>
            <option>Consultório</option>
            <option>Serviços</option>
          </select>

          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option>Todas as Condições</option>
            <option>Novo</option>
            <option>Usado</option>
            <option>Serviço</option>
          </select>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{product.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  product.condition === 'Novo' ? 'bg-green-100 text-green-800' :
                  product.condition === 'Usado' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {product.condition}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-3">{product.description}</p>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews})</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{product.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    R$ {product.price.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-sm text-gray-600">por {product.seller}</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Contatar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderGestaoClinica = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Gestão da Clínica</h1>
            <p className="text-indigo-100 text-lg">
              Ferramentas profissionais de gestão e relatórios para sua clínica odontológica
            </p>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Briefcase className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Navegação */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'agenda', label: 'Agenda', icon: Calendar },
            { id: 'financeiro', label: 'Financeiro', icon: DollarSign },
            { id: 'pacientes', label: 'Pacientes', icon: Users },
            { id: 'relatorios', label: 'Relatórios', icon: BarChart3 }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setGestaoActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                gestaoActiveSection === section.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <section.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      {gestaoActiveSection === 'agenda' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Agenda do Dia</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo Agendamento
              </button>
            </div>

            <div className="space-y-4">
              {gestaoData.appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex flex-col items-center justify-center">
                      <Clock className="w-5 h-5 text-indigo-600 mb-1" />
                      <span className="text-xs font-medium text-indigo-600">{appointment.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                    <p className="text-sm text-gray-600">{appointment.procedure}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      appointment.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-200">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {gestaoActiveSection === 'financeiro' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Receita</p>
                  <p className="text-xl font-bold text-gray-900">R$ {gestaoData.financialData.revenue.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Despesas</p>
                  <p className="text-xl font-bold text-gray-900">R$ {gestaoData.financialData.expenses.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Lucro</p>
                  <p className="text-xl font-bold text-gray-900">R$ {gestaoData.financialData.profit.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">A Receber</p>
                  <p className="text-xl font-bold text-gray-900">R$ {gestaoData.financialData.pending.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Receita por Procedimento</h3>
            <div className="space-y-4">
              {gestaoData.procedures.map((procedure, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{procedure.name}</span>
                    <span className="text-sm font-bold text-gray-900">R$ {procedure.revenue.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${(procedure.revenue / 24000) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{procedure.count} procedimentos</span>
                    <span>{((procedure.revenue / 24000) * 100).toFixed(0)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {gestaoActiveSection === 'pacientes' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900">{gestaoData.patients.total}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Novos</p>
                  <p className="text-2xl font-bold text-gray-900">{gestaoData.patients.new}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Retornos</p>
                  <p className="text-2xl font-bold text-gray-900">{gestaoData.patients.returning}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Inativos</p>
                  <p className="text-2xl font-bold text-gray-900">{gestaoData.patients.inactive}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Lista de Pacientes</h3>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Buscar paciente..."
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Novo Paciente
                </button>
              </div>
            </div>

            <div className="text-center py-12 text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p>Lista de pacientes será exibida aqui</p>
            </div>
          </div>
        </div>
      )}

      {gestaoActiveSection === 'relatorios' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Relatórios Disponíveis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Relatório Financeiro</h4>
                <p className="text-sm text-gray-600">Análise completa de receitas e despesas</p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Relatório de Pacientes</h4>
                <p className="text-sm text-gray-600">Estatísticas e dados dos pacientes</p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Relatório de Agendamentos</h4>
                <p className="text-sm text-gray-600">Análise de ocupação e agendamentos</p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <PieChart className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Relatório de Procedimentos</h4>
                <p className="text-sm text-gray-600">Procedimentos mais realizados</p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Relatório de Crescimento</h4>
                <p className="text-sm text-gray-600">Evolução da clínica ao longo do tempo</p>
              </button>

              <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Exportar Dados</h4>
                <p className="text-sm text-gray-600">Exportar relatórios em PDF ou Excel</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderFinancasPessoais = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Finanças Pessoais</h1>
            <p className="text-emerald-100 text-lg">
              Ferramentas e dicas para uma gestão financeira pessoal eficiente
            </p>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Wallet className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Navegação */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'orcamento', label: 'Orçamento', icon: Calculator },
            { id: 'investimentos', label: 'Investimentos', icon: TrendingUp },
            { id: 'objetivos', label: 'Objetivos', icon: Target },
            { id: 'dicas', label: 'Dicas Financeiras', icon: Lightbulb }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setFinancasActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                financasActiveSection === section.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <section.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      {financasActiveSection === 'orcamento' && (
        <div className="space-y-6">
          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Saldo Total</p>
                  <p className="text-xl font-bold text-gray-900">R$ {financasData.saldoTotal.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Receita Mensal</p>
                  <p className="text-xl font-bold text-gray-900">R$ {financasData.receitaMensal.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Despesa Mensal</p>
                  <p className="text-xl font-bold text-gray-900">R$ {financasData.despesaMensal.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <PiggyBank className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Economias</p>
                  <p className="text-xl font-bold text-gray-900">R$ {financasData.economiasMensal.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Despesas por Categoria */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Despesas por Categoria</h3>
            <div className="space-y-4">
              {financasData.despesasPorCategoria.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{item.categoria}</span>
                    <span className="text-sm font-bold text-gray-900">R$ {item.valor.toLocaleString('pt-BR')} ({item.percentual}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full"
                      style={{ width: `${item.percentual}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculadora de Orçamento */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Calculadora de Orçamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Receita Mensal</label>
                  <input
                    type="number"
                    placeholder="R$ 0,00"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Despesas Fixas</label>
                  <input
                    type="number"
                    placeholder="R$ 0,00"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Despesas Variáveis</label>
                  <input
                    type="number"
                    placeholder="R$ 0,00"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="font-semibold text-emerald-900 mb-4">Resultado</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Saldo Disponível</span>
                    <span className="text-lg font-bold text-emerald-900">R$ 0,00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">% para Investir</span>
                    <span className="text-lg font-bold text-emerald-900">0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">% para Reserva</span>
                    <span className="text-lg font-bold text-emerald-900">0%</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Calcular
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {financasActiveSection === 'investimentos' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Carteira de Investimentos</h3>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Investido</p>
                <p className="text-2xl font-bold text-gray-900">R$ {financasData.investimentos.toLocaleString('pt-BR')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Renda Fixa</h4>
                    <p className="text-sm text-blue-700">Baixo Risco</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-900">R$ 50.000</p>
                <p className="text-sm text-blue-700 mt-2">40% da carteira</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <LineChart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Ações</h4>
                    <p className="text-sm text-green-700">Médio Risco</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-900">R$ 50.000</p>
                <p className="text-sm text-green-700 mt-2">40% da carteira</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                    <Gem className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Fundos</h4>
                    <p className="text-sm text-purple-700">Diversificado</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-purple-900">R$ 25.000</p>
                <p className="text-sm text-purple-700 mt-2">20% da carteira</p>
              </div>
            </div>
          </div>

          {/* Dicas de Investimento */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Dicas de Investimento</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Diversifique sua carteira</h4>
                <p className="text-sm text-gray-600">Não coloque todos os ovos na mesma cesta. Distribua seus investimentos em diferentes tipos de ativos para reduzir riscos.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Invista regularmente</h4>
                <p className="text-sm text-gray-600">Faça aportes mensais consistentes. O poder dos juros compostos funciona melhor com investimentos regulares ao longo do tempo.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Tenha objetivos claros</h4>
                <p className="text-sm text-gray-600">Defina metas de curto, médio e longo prazo. Isso ajuda a escolher os investimentos mais adequados para cada objetivo.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {financasActiveSection === 'objetivos' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Meus Objetivos Financeiros</h3>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo Objetivo
              </button>
            </div>

            <div className="space-y-6">
              {financasData.objetivos.map((objetivo) => (
                <div key={objetivo.id} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{objetivo.nome}</h4>
                    <span className="text-sm text-gray-600">Prazo: {new Date(objetivo.prazo).toLocaleDateString('pt-BR')}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progresso</span>
                      <span className="font-medium text-gray-900">
                        R$ {objetivo.atual.toLocaleString('pt-BR')} / R$ {objetivo.meta.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-emerald-600 h-3 rounded-full transition-all"
                        style={{ width: `${(objetivo.atual / objetivo.meta) * 100}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-emerald-600 font-medium">{((objetivo.atual / objetivo.meta) * 100).toFixed(1)}% concluído</span>
                      <span className="text-gray-600">Faltam R$ {(objetivo.meta - objetivo.atual).toLocaleString('pt-BR')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                      Adicionar Valor
                    </button>
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {financasActiveSection === 'dicas' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Dicas para uma Boa Gestão Financeira Pessoal</h3>
            
            <div className="space-y-8">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Regra 50-30-20</h4>
                <p className="text-gray-700 mb-4">
                  Distribua sua renda mensal de forma inteligente: 50% para necessidades essenciais, 
                  30% para desejos pessoais e 20% para poupança e investimentos.
                </p>
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">50%</div>
                      <div className="text-sm text-emerald-700">Necessidades</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">30%</div>
                      <div className="text-sm text-emerald-700">Desejos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">20%</div>
                      <div className="text-sm text-emerald-700">Poupança</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Construa uma Reserva de Emergência</h4>
                <p className="text-gray-700 mb-4">
                  Tenha de 3 a 6 meses de suas despesas mensais guardados em uma aplicação de liquidez imediata. 
                  Isso garante segurança em momentos de imprevistos.
                </p>
                <div className="bg-blue-50 rounded-xl p-4">
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Comece guardando 10% da sua renda mensal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Mantenha em investimentos de baixo risco e alta liquidez</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Use apenas para emergências reais</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Evite Dívidas de Alto Custo</h4>
                <p className="text-gray-700 mb-4">
                  Cartão de crédito rotativo e cheque especial têm juros altíssimos. 
                  Se precisar de crédito, busque opções mais baratas como empréstimo pessoal ou consignado.
                </p>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-700">Cartão de Crédito Rotativo</span>
                      <span className="text-sm font-bold text-red-600">~400% ao ano</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-700">Cheque Especial</span>
                      <span className="text-sm font-bold text-red-600">~300% ao ano</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-700">Empréstimo Pessoal</span>
                      <span className="text-sm font-bold text-yellow-600">~50% ao ano</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-700">Empréstimo Consignado</span>
                      <span className="text-sm font-bold text-green-600">~20% ao ano</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Invista em Educação Financeira</h4>
                <p className="text-gray-700 mb-4">
                  Conhecimento é poder. Dedique tempo para aprender sobre finanças pessoais, 
                  investimentos e planejamento financeiro.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h5 className="font-semibold text-orange-900 mb-1">Livros</h5>
                    <p className="text-sm text-orange-700">Leia sobre finanças</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <Video className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h5 className="font-semibold text-orange-900 mb-1">Cursos</h5>
                    <p className="text-sm text-orange-700">Aprenda com especialistas</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h5 className="font-semibold text-orange-900 mb-1">Comunidade</h5>
                    <p className="text-sm text-orange-700">Troque experiências</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Automatize suas Finanças</h4>
                <p className="text-gray-700 mb-4">
                  Configure débitos automáticos para contas fixas e transferências automáticas para investimentos. 
                  Isso garante disciplina e evita esquecimentos.
                </p>
                <div className="bg-green-50 rounded-xl p-4">
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Débito automático para contas essenciais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Transferência automática para poupança no dia do salário</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Aportes mensais automáticos em investimentos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/30ec40ea-d857-43d3-a63c-c1d8c2bae79a.png" 
              alt="Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/30ec40ea-d857-43d3-a63c-c1d8c2bae79a.png" 
                  alt="Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">DentalSocial</h1>
                <p className="text-sm text-gray-600">Plataforma Odontológica Completa</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Entrar
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => setShowPricingModal(true)}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Ver planos"
                  >
                    <Crown className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setShowSupportChat(true)}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Suporte"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" title="Notificações">
                    <Bell className="w-5 h-5" />
                  </button>
                  <div className="relative group">
                    <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </button>
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="p-4 border-b border-gray-100">
                        <p className="font-medium text-gray-900">{userProfile.name}</p>
                        <p className="text-sm text-gray-600">{userProfile.email}</p>
                        <p className="text-sm text-gray-600">{userProfile.specialty}</p>
                        <p className="text-xs text-blue-600 font-medium capitalize">Plano {userSubscription}</p>
                        {isAdmin && (
                          <p className="text-xs text-red-600 font-medium">Administrador</p>
                        )}
                      </div>
                      <div className="p-2">
                        <button
                          onClick={() => setShowProfileModal(true)}
                          className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <Edit className="w-4 h-4" />
                          Editar Perfil
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          Sair
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {user && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'dicas', label: 'Dicas', icon: Lightbulb },
              { id: 'dental-social', label: 'Dental Social', icon: MessageSquare },
              { id: 'dental-mercado', label: 'Dental Mercado', icon: ShoppingCart },
              { id: 'gestao-clinica', label: 'Gestão da Clínica', icon: Briefcase },
              { id: 'financas-pessoais', label: 'Finanças Pessoais', icon: Wallet },
              ...(isAdmin ? [{ id: 'admin', label: 'Admin', icon: Shield }] : [])
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
          {activeTab === 'dicas' && renderDicas()}
          {activeTab === 'dental-social' && renderDentalSocial()}
          {activeTab === 'dental-mercado' && renderDentalMercado()}
          {activeTab === 'gestao-clinica' && renderGestaoClinica()}
          {activeTab === 'financas-pessoais' && renderFinancasPessoais()}
          {activeTab === 'admin' && isAdmin && renderAdmin()}
        </div>
      )}

      {!user && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Smile className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Dental Social
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Plataforma completa para profissionais da odontologia com rede social, marketplace e gestão
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dental Social</h3>
                <p className="text-gray-600">Rede social exclusiva para profissionais da odontologia</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dental Mercado</h3>
                <p className="text-gray-600">Marketplace para equipamentos e serviços odontológicos</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestão Completa</h3>
                <p className="text-gray-600">Relatórios e ferramentas de gestão para sua clínica</p>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Começar Grátis
              </button>
              <button
                onClick={() => setShowPricingModal(true)}
                className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Ver Planos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sistema de Notificações Nativo */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-300 ${
              notification.type === 'success' ? 'border-l-4 border-green-500' :
              notification.type === 'error' ? 'border-l-4 border-red-500' :
              'border-l-4 border-blue-500'
            }`}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notification.type === 'success' && <CheckCircle className="h-6 w-6 text-green-400" />}
                  {notification.type === 'error' && <XCircle className="h-6 w-6 text-red-400" />}
                  {notification.type === 'info' && <Info className="h-6 w-6 text-blue-400" />}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {showAuthModal && <AuthModal />}
      {showPricingModal && <PricingModal />}
      {showSupportChat && <SupportChat />}
      {showProfileModal && <ProfileModal />}
      {showAddUserModal && <AddUserModal />}
    </div>
  )
}
