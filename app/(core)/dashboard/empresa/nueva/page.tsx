"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Textarea } from "@/shared/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Building2, Upload, X } from "lucide-react"
import HeaderModule from "@/shared/components/header-module"
import Image from "next/image"

const countries = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "España",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Dominicana",
  "Uruguay",
  "Venezuela",
]

export default function NewCompanyPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    cuit: "",
  })
  const [logo, setLogo] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, logo: "El archivo no debe superar los 5MB" }))
        return
      }
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({ ...prev, logo: "El archivo debe ser una imagen" }))
        return
      }
      setLogo(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setErrors((prev) => ({ ...prev, logo: "" }))
    }
  }

  const removeLogo = () => {
    setLogo(null)
    setLogoPreview(null)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }
    if (!formData.country) {
      newErrors.country = "El país es requerido"
    }
    if (!formData.cuit.trim()) {
      newErrors.cuit = "El CUIT es requerido"
    }
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "URL inválida (debe comenzar con http:// o https://)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Aquí iría la lógica para enviar los datos a la base de datos
    console.log("Datos del formulario:", formData)
    console.log("Logo:", logo)

    // Simular éxito y redirigir
    alert("Empresa creada exitosamente")
    router.push("/")
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <HeaderModule title="Nueva Empresa" description="Completa los datos para registrar una nueva empresa" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Información de la Empresa</CardTitle>
              <CardDescription className="text-muted-foreground">
                Los campos marcados con * son obligatorios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Logo Upload */}
              <div className="space-y-2">
                <Label htmlFor="logo" className="text-foreground">
                  Logo de la Empresa
                </Label>
                <div className="flex items-start gap-4">
                  {logoPreview ? (
                    <div className="relative">
                      <Image
                        src={logoPreview || "/placeholder.svg"}
                        alt="Logo preview"
                        className="h-24 w-24 rounded-lg border border-border object-cover"
                      />
                      <button
                        type="button"
                        onClick={removeLogo}
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="logo"
                      className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 transition-colors hover:bg-muted"
                    >
                      <Upload className="h-6 w-6 text-muted-foreground" />
                      <span className="mt-1 text-xs text-muted-foreground">Subir</span>
                    </label>
                  )}
                  <div className="flex-1">
                    <Input id="logo" type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
                    <p className="text-sm text-muted-foreground">
                      Formatos aceptados: JPG, PNG, GIF. Tamaño máximo: 5MB
                    </p>
                    {errors.logo && <p className="mt-1 text-sm text-destructive">{errors.logo}</p>}
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nombre de la Empresa *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Ej: Acme Corporation"
                  className={`bg-background ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">
                  Descripción
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe brevemente la empresa y su actividad principal"
                  rows={4}
                  className="resize-none bg-background"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="contacto@empresa.com"
                    className={`bg-background ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+54 11 1234-5678"
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="space-y-2">
                <Label htmlFor="website" className="text-foreground">
                  Sitio Web
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://www.empresa.com"
                  className={`bg-background ${errors.website ? "border-destructive" : ""}`}
                />
                {errors.website && <p className="text-sm text-destructive">{errors.website}</p>}
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground">
                  Dirección
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Calle, número, ciudad, código postal"
                  className="bg-background"
                />
              </div>

              {/* Country and CUIT */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground">
                    País *
                  </Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger
                      id="country"
                      className={`bg-background ${errors.country ? "border-destructive" : ""}`}
                    >
                      <SelectValue placeholder="Selecciona un país" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && <p className="text-sm text-destructive">{errors.country}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cuit" className="text-foreground">
                    CUIT *
                  </Label>
                  <Input
                    id="cuit"
                    value={formData.cuit}
                    onChange={(e) => handleInputChange("cuit", e.target.value)}
                    placeholder="XX-XXXXXXXX-X"
                    className={`bg-background ${errors.cuit ? "border-destructive" : ""}`}
                  />
                  {errors.cuit && <p className="text-sm text-destructive">{errors.cuit}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <Link href="/dashboard">
              <Button type="button" variant="outline" className="border-border bg-transparent">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Crear Empresa
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
