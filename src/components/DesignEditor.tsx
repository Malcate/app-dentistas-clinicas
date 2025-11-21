"use client"

import { useState, useRef } from 'react'
import { 
  X, 
  Upload, 
  Type, 
  Image as ImageIcon, 
  Square, 
  Circle,
  Star,
  Heart,
  Palette,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Download,
  Save
} from 'lucide-react'
import type { Template, CanvasElement } from '@/lib/types'

interface DesignEditorProps {
  isOpen: boolean
  onClose: () => void
  template?: Template | null
}

export default function DesignEditor({ isOpen, onClose, template }: DesignEditorProps) {
  const [selectedTool, setSelectedTool] = useState('select')
  const [selectedElement, setSelectedElement] = useState<CanvasElement | null>(null)
  const [canvasElements, setCanvasElements] = useState<CanvasElement[]>([])
  const [canvasSize, setCanvasSize] = useState({ width: 400, height: 400 })
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  
  const canvasRef = useRef<HTMLDivElement>(null)

  if (!isOpen) return null

  const tools = [
    { id: 'select', icon: '↖️', name: 'Selecionar' },
    { id: 'text', icon: Type, name: 'Texto' },
    { id: 'image', icon: ImageIcon, name: 'Imagem' },
    { id: 'shape', icon: Square, name: 'Formas' },
    { id: 'icon', icon: Heart, name: 'Ícones' }
  ]

  const shapes = [
    { id: 'rectangle', icon: Square, name: 'Retângulo' },
    { id: 'circle', icon: Circle, name: 'Círculo' },
    { id: 'star', icon: Star, name: 'Estrela' },
    { id: 'heart', icon: Heart, name: 'Coração' }
  ]

  const dentalIcons = [
    { id: 'tooth', icon: '🦷', name: 'Dente' },
    { id: 'smile', icon: '😊', name: 'Sorriso' },
    { id: 'sparkle', icon: '✨', name: 'Brilho' },
    { id: 'clean', icon: '🧼', name: 'Limpeza' },
    { id: 'check', icon: '✅', name: 'Aprovado' },
    { id: 'star', icon: '⭐', name: 'Estrela' }
  ]

  const addTextElement = () => {
    const newElement: CanvasElement = {
      id: Date.now(),
      type: 'text',
      content: 'Novo Texto',
      x: 100,
      y: 100,
      fontSize: 24,
      color: '#000000',
      fontFamily: 'Arial',
      fontWeight: 'normal'
    }
    setCanvasElements([...canvasElements, newElement])
  }

  const addImageElement = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement
      const file = target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const result = event.target?.result as string
          const newElement: CanvasElement = {
            id: Date.now(),
            type: 'image',
            content: result,
            x: 50,
            y: 50,
            width: 200,
            height: 150
          }
          setCanvasElements([...canvasElements, newElement])
        }
        reader.readAsDataURL(file)
      }
    }
    input.click()
  }

  const addShapeElement = (shapeType: string) => {
    const newElement: CanvasElement = {
      id: Date.now(),
      type: 'shape',
      shapeType,
      content: shapeType,
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      color: '#3B82F6',
      borderColor: '#1E40AF',
      borderWidth: 2
    }
    setCanvasElements([...canvasElements, newElement])
  }

  const addIconElement = (iconData: { icon: string; name: string }) => {
    const newElement: CanvasElement = {
      id: Date.now(),
      type: 'icon',
      content: iconData.icon,
      x: 200,
      y: 200,
      fontSize: 48
    }
    setCanvasElements([...canvasElements, newElement])
  }

  const updateSelectedElement = (updates: Partial<CanvasElement>) => {
    if (!selectedElement) return
    
    const updatedElements = canvasElements.map(element => 
      element.id === selectedElement.id 
        ? { ...element, ...updates }
        : element
    )
    setCanvasElements(updatedElements)
    setSelectedElement({ ...selectedElement, ...updates })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
      {/* Sidebar - Ferramentas */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Editor Visual</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Ferramentas */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">Ferramentas</h3>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-3 rounded-lg border transition-colors flex flex-col items-center gap-2 ${
                  selectedTool === tool.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                {typeof tool.icon === 'string' ? (
                  <span className="text-xl">{tool.icon}</span>
                ) : (
                  <tool.icon className="w-5 h-5" />
                )}
                <span className="text-xs font-medium">{tool.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo baseado na ferramenta selecionada */}
        <div className="flex-1 p-4 overflow-y-auto">
          {selectedTool === 'text' && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Adicionar Texto</h3>
              <button
                onClick={addTextElement}
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Adicionar Texto
              </button>
              
              {selectedElement?.type === 'text' && (
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-medium text-gray-900">Propriedades do Texto</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      rows={3}
                      value={selectedElement.content}
                      onChange={(e) => updateSelectedElement({ content: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tamanho</label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                        value={selectedElement.fontSize || 24}
                        min="8"
                        max="72"
                        onChange={(e) => updateSelectedElement({ fontSize: parseInt(e.target.value) })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cor</label>
                      <input
                        type="color"
                        className="w-full h-10 border border-gray-300 rounded-lg"
                        value={selectedElement.color || '#000000'}
                        onChange={(e) => updateSelectedElement({ color: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => updateSelectedElement({ fontWeight: selectedElement.fontWeight === 'bold' ? 'normal' : 'bold' })}
                      className={`flex-1 p-2 border rounded-lg transition-colors ${
                        selectedElement.fontWeight === 'bold' ? 'bg-blue-100 border-blue-300' : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Bold className="w-4 h-4 mx-auto" />
                    </button>
                    <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Italic className="w-4 h-4 mx-auto" />
                    </button>
                    <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Underline className="w-4 h-4 mx-auto" />
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <AlignLeft className="w-4 h-4 mx-auto" />
                    </button>
                    <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <AlignCenter className="w-4 h-4 mx-auto" />
                    </button>
                    <button className="flex-1 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <AlignRight className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedTool === 'image' && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Adicionar Imagem</h3>
              
              <button
                onClick={addImageElement}
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex flex-col items-center gap-2"
              >
                <Upload className="w-6 h-6 text-gray-400" />
                <span className="text-sm text-gray-600">Clique para fazer upload</span>
              </button>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Biblioteca de Imagens</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTool === 'shape' && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Formas</h3>
              
              <div className="grid grid-cols-2 gap-2">
                {shapes.map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => addShapeElement(shape.id)}
                    className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors flex flex-col items-center gap-2"
                  >
                    <shape.icon className="w-6 h-6 text-gray-600" />
                    <span className="text-xs text-gray-700">{shape.name}</span>
                  </button>
                ))}
              </div>

              {selectedElement?.type === 'shape' && (
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-medium text-gray-900">Propriedades da Forma</h4>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cor</label>
                      <input
                        type="color"
                        className="w-full h-10 border border-gray-300 rounded-lg"
                        value={selectedElement.color || '#3B82F6'}
                        onChange={(e) => updateSelectedElement({ color: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Borda</label>
                      <input
                        type="color"
                        className="w-full h-10 border border-gray-300 rounded-lg"
                        value={selectedElement.borderColor || '#1E40AF'}
                        onChange={(e) => updateSelectedElement({ borderColor: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedTool === 'icon' && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Ícones Odontológicos</h3>
              
              <div className="grid grid-cols-3 gap-2">
                {dentalIcons.map((icon) => (
                  <button
                    key={icon.id}
                    onClick={() => addIconElement(icon)}
                    className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors flex flex-col items-center gap-1"
                  >
                    <span className="text-2xl">{icon.icon}</span>
                    <span className="text-xs text-gray-700">{icon.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer - Ações */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Save className="w-4 h-4" />
              Salvar
            </button>
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Canvas Principal */}
      <div className="flex-1 bg-gray-100 flex flex-col">
        {/* Toolbar do Canvas */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              onChange={(e) => {
                const [width, height] = e.target.value.split('x').map(Number)
                setCanvasSize({ width, height })
              }}
            >
              <option value="400x400">Instagram Post (1080x1080)</option>
              <option value="400x711">Instagram Story (1080x1920)</option>
              <option value="630x330">Facebook Post (1200x630)</option>
              <option value="627x330">LinkedIn Post (1200x627)</option>
            </select>
          </div>
        </div>

        {/* Área do Canvas */}
        <div className="flex-1 p-8 flex items-center justify-center">
          <div 
            className="bg-white rounded-lg shadow-lg relative"
            style={{ 
              width: `${canvasSize.width}px`, 
              height: `${canvasSize.height}px`
            }}
          >
            {/* Canvas de Design */}
            <div 
              ref={canvasRef}
              className="w-full h-full relative overflow-hidden rounded-lg border-2 border-gray-200"
              style={{ backgroundColor }}
            >
              {canvasElements.map((element) => (
                <div
                  key={element.id}
                  className={`absolute cursor-move ${selectedElement?.id === element.id ? 'ring-2 ring-blue-500' : ''}`}
                  style={{
                    left: element.x,
                    top: element.y,
                    fontSize: element.fontSize,
                    color: element.color,
                    width: element.width,
                    height: element.height,
                    fontWeight: element.fontWeight
                  }}
                  onClick={() => setSelectedElement(element)}
                >
                  {element.type === 'text' && (
                    <div className="select-none">{element.content}</div>
                  )}
                  {element.type === 'image' && (
                    <img src={element.content} alt="" className="w-full h-full object-cover rounded" />
                  )}
                  {element.type === 'shape' && (
                    <div
                      className="w-full h-full rounded"
                      style={{
                        backgroundColor: element.color,
                        border: `${element.borderWidth}px solid ${element.borderColor}`,
                        borderRadius: element.shapeType === 'circle' ? '50%' : '8px'
                      }}
                    />
                  )}
                  {element.type === 'icon' && (
                    <div className="select-none" style={{ fontSize: element.fontSize }}>
                      {element.content}
                    </div>
                  )}
                </div>
              ))}
              
              {canvasElements.length === 0 && (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <Palette className="w-12 h-12 mx-auto mb-4" />
                    <p>Selecione uma ferramenta para começar</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}