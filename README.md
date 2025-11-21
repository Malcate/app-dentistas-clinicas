# 🦷 DentalSocial - Plataforma de Marketing Odontológico

Uma plataforma completa de marketing digital para dentistas e clínicas odontológicas, com sistema de assinatura SaaS, editor visual, IA para textos, agendamento de posts e painel administrativo.

## 🚀 Funcionalidades

### ✅ Sistema de Autenticação
- Login/cadastro com email e senha
- Recuperação de senha
- Autenticação social (Google/Apple) - configurável
- Gestão de usuários e permissões

### ✅ Gateway de Pagamentos (Stripe)
- Assinatura recorrente (SaaS)
- Suporte a cartão de crédito, PIX e boleto
- 3 planos: Gratuito, Profissional (R$ 49/mês), Empresarial (R$ 99/mês)
- Portal do cliente para gerenciar assinatura
- Webhooks para sincronização automática

### ✅ Editor Visual de Posts
- Templates odontológicos pré-definidos
- Editor drag-and-drop
- Ferramentas de texto, imagem, formas e ícones
- Preview em tempo real
- Exportação em múltiplos formatos

### ✅ IA para Geração de Textos
- Textos personalizados por especialidade
- Diferentes tons: profissional, amigável, motivador, educativo
- Geração de hashtags automática
- Sugestões baseadas em tendências

### ✅ Agendamento de Posts
- Calendário visual
- Agendamento para Instagram, Facebook, LinkedIn
- Melhores horários sugeridos
- Status de publicação em tempo real

### ✅ Painel Administrativo
- Dashboard com métricas
- Gestão de usuários e clínicas
- Histórico de pagamentos
- Relatórios de engajamento
- Sistema de suporte integrado

### ✅ Chat de Suporte
- Chat nativo dentro da plataforma
- Histórico de conversas
- Notificações em tempo real
- Interface admin para responder tickets

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Realtime)
- **Pagamentos**: Stripe (recorrência, webhooks)
- **UI**: Shadcn/ui, Lucide Icons
- **Notificações**: React Hot Toast

## 📋 Pré-requisitos

- Node.js 18+ 
- Conta no Supabase
- Conta no Stripe
- Conta OpenAI (opcional, para IA)

## ⚙️ Configuração

### 1. Clone o repositório
```bash
git clone <repository-url>
cd dental-social
npm install
```

### 2. Configure o Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Vá para Settings → API e copie:
   - Project URL
   - Anon public key
3. Execute o script `database-setup.sql` no SQL Editor do Supabase
4. Configure autenticação:
   - Vá para Authentication → Settings
   - Configure providers (Google, Apple se necessário)
   - Defina Site URL: `http://localhost:3000`

### 3. Configure o Stripe

1. Crie uma conta no [Stripe](https://stripe.com)
2. Vá para Developers → API Keys e copie:
   - Publishable key
   - Secret key
3. Crie produtos e preços:
   - Plano Pro: R$ 49,00/mês
   - Plano Enterprise: R$ 99,00/mês
4. Configure webhook endpoint:
   - URL: `https://seu-dominio.com/api/webhooks/stripe`
   - Eventos: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`

### 4. Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key

# Stripe
STRIPE_SECRET_KEY=sk_test_sua_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_sua_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_seu_webhook_secret
STRIPE_PRO_PRICE_ID=price_seu_pro_plan_id
STRIPE_ENTERPRISE_PRICE_ID=price_seu_enterprise_plan_id

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# OpenAI (opcional)
OPENAI_API_KEY=sk-sua_openai_key
```

### 5. Execute o projeto

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 📱 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Configurações Adicionais

### Webhooks do Stripe

Para receber notificações de pagamento em produção:

1. Configure o endpoint no Stripe Dashboard
2. Adicione a URL: `https://seu-dominio.com/api/webhooks/stripe`
3. Selecione os eventos necessários
4. Copie o webhook secret para `.env.local`

### Integração com Redes Sociais

Para publicação automática (opcional):

1. **Instagram**: Meta Business API
2. **Facebook**: Facebook Graph API  
3. **LinkedIn**: LinkedIn Marketing API

### IA para Textos

Configure OpenAI API para geração automática de textos:

1. Crie conta na OpenAI
2. Gere API key
3. Adicione em `OPENAI_API_KEY`

## 📊 Estrutura do Banco de Dados

- **users**: Dados dos usuários e assinaturas
- **clinics**: Informações das clínicas
- **posts**: Posts criados e agendados
- **payments**: Histórico de pagamentos
- **support_messages**: Mensagens do chat de suporte

## 🔐 Segurança

- Row Level Security (RLS) habilitado
- Políticas de acesso por usuário/clínica
- Validação de dados no backend
- Sanitização de inputs
- Webhooks assinados (Stripe)

## 📈 Planos e Limites

### Gratuito
- 10 posts por mês
- Templates básicos
- Suporte por email

### Profissional (R$ 49/mês)
- Posts ilimitados
- Todos os templates
- IA para textos
- Agendamento avançado
- Relatórios detalhados
- Suporte prioritário

### Empresarial (R$ 99/mês)
- Tudo do plano Pro
- Usuários ilimitados
- White label
- API personalizada
- Suporte 24/7
- Gerente de conta

## 🆘 Suporte

- Chat integrado na plataforma
- Email: suporte@dentalsocial.com
- Documentação: [docs.dentalsocial.com]

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para dentistas que querem crescer no digital**