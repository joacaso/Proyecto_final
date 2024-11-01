'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function AgregarReceta() {
  const [receta, setReceta] = useState({
    nombre: '',
    ingredientes: '',
    instrucciones: '',
    tiempoPreparacion: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setReceta(prevReceta => ({
      ...prevReceta,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar la receta al backend
    console.log('Receta a enviar:', receta)
    // Resetear el formulario después de enviar
    setReceta({ nombre: '', ingredientes: '', instrucciones: '', tiempoPreparacion: '' })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Agregar Nueva Receta</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre de la Receta</label>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={receta.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="ingredientes" className="block text-sm font-medium text-gray-700">Ingredientes</label>
            <Textarea
              id="ingredientes"
              name="ingredientes"
              value={receta.ingredientes}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="instrucciones" className="block text-sm font-medium text-gray-700">Instrucciones</label>
            <Textarea
              id="instrucciones"
              name="instrucciones"
              value={receta.instrucciones}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tiempoPreparacion" className="block text-sm font-medium text-gray-700">Tiempo de Preparación</label>
            <Input
              type="text"
              id="tiempoPreparacion"
              name="tiempoPreparacion"
              value={receta.tiempoPreparacion}
              onChange={handleChange}
              required
            />
          </div>
          <CardFooter className="px-0">
            <Button type="submit" className="w-full">Agregar Receta</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}