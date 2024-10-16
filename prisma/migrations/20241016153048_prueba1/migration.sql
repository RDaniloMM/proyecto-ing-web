-- CreateEnum
CREATE TYPE "estado_conexion" AS ENUM ('Pendiente', 'Aceptado', 'Rechazado');

-- CreateEnum
CREATE TYPE "rol" AS ENUM ('Invitado', 'Estudiante', 'Moderador', 'Docente');

-- CreateEnum
CREATE TYPE "tipo_notificacion" AS ENUM ('Comentario', 'Reaccion', 'Conexion', 'Publicacion', 'Evento', 'Mensaje', 'Recomendacion');

-- CreateEnum
CREATE TYPE "tipo_reaccion" AS ENUM ('Me gusta', 'Me encanta', 'Me sorprende', 'Me ayuda', 'Inspirador', 'No me gusta');

-- CreateEnum
CREATE TYPE "tipo_recurso" AS ENUM ('Video', 'Documento', 'Presentacion', 'Imagen', 'Audio', 'Otro');

-- CreateTable
CREATE TABLE "area_conocimiento" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,

    CONSTRAINT "area_conocimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria_evento" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,

    CONSTRAINT "categoria_evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria_grupo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,

    CONSTRAINT "categoria_grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria_publicacion" (
    "id_cat_publicacion" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,

    CONSTRAINT "categoria_publicacion_pkey" PRIMARY KEY ("id_cat_publicacion")
);

-- CreateTable
CREATE TABLE "comentario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "publicacion_id" UUID,
    "contenido" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conexion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "otro_usuario_id" UUID,
    "estado" "estado_conexion" NOT NULL DEFAULT 'Pendiente',
    "solicitado_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "conexion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cuenta" (
    "user_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cuenta_pkey" PRIMARY KEY ("provider","provider_account_id")
);

-- CreateTable
CREATE TABLE "etiqueta" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,

    CONSTRAINT "etiqueta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "categoria_evento_id" UUID,
    "creado_por" UUID,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fecha_evento" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "evento_id" UUID,
    "fecha_inicio" TIMESTAMPTZ(6),
    "fecha_fin" TIMESTAMPTZ(6),

    CONSTRAINT "fecha_evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gamificacion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "puntos" INTEGER DEFAULT 0,
    "fecha_logro" TIMESTAMPTZ(6),

    CONSTRAINT "gamificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "categoria_grupo_id" UUID,
    "creado_por" UUID,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insignia" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "insignia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensaje" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "remitente_id" UUID,
    "destinatario_id" UUID,
    "contenido" TEXT NOT NULL,
    "leido" BOOLEAN DEFAULT false,
    "enviado_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensaje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miembros_de_grupo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "grupo_id" UUID,
    "usuario_id" UUID,
    "joined_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "miembros_de_grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "tipo_notificacion" "tipo_notificacion" NOT NULL,
    "referencia_id" UUID,
    "descripcion" TEXT,
    "leido" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publicacion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "contenido" TEXT NOT NULL,
    "recurso_id" UUID,
    "grupo_id" UUID,
    "cat_publicacion" UUID,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "publicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reaccion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "publicacion_id" UUID,
    "tipo_reaccion" "tipo_reaccion" NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recomendaciones" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "content_id" UUID,
    "content_type" TEXT,
    "recommended_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recomendaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recurso" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_subida" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recurso_etiqueta" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "recurso_id" UUID,
    "etiqueta_id" UUID,

    CONSTRAINT "recurso_etiqueta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rutas_recurso" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "recurso_id" UUID,
    "ruta_archivo" TEXT NOT NULL,
    "tipo_recurso" "tipo_recurso" NOT NULL,

    CONSTRAINT "rutas_recurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sesion" (
    "session_token" TEXT NOT NULL,
    "user_id" UUID,
    "expires" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sesion_pkey" PRIMARY KEY ("session_token")
);

-- CreateTable
CREATE TABLE "token_verificacion" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "token_verificacion_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" "rol" NOT NULL,
    "biografia" TEXT,
    "foto_perfil" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario_area_conocimiento" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "area_conocimiento_id" UUID,

    CONSTRAINT "usuario_area_conocimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario_insignia" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_id" UUID,
    "insignia_id" UUID,
    "fecha_obtenida" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_insignia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "area_conocimiento_nombre_key" ON "area_conocimiento"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "etiqueta_nombre_key" ON "etiqueta"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "insignia_nombre_key" ON "insignia"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_publicacion_id_fkey" FOREIGN KEY ("publicacion_id") REFERENCES "publicacion"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "conexion" ADD CONSTRAINT "conexion_otro_usuario_id_fkey" FOREIGN KEY ("otro_usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "conexion" ADD CONSTRAINT "conexion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cuenta" ADD CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_categoria_evento_id_fkey" FOREIGN KEY ("categoria_evento_id") REFERENCES "categoria_evento"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_creado_por_fkey" FOREIGN KEY ("creado_por") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fecha_evento" ADD CONSTRAINT "fecha_evento_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "evento"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gamificacion" ADD CONSTRAINT "gamificacion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_categoria_grupo_id_fkey" FOREIGN KEY ("categoria_grupo_id") REFERENCES "categoria_grupo"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_creado_por_fkey" FOREIGN KEY ("creado_por") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensaje" ADD CONSTRAINT "mensaje_destinatario_id_fkey" FOREIGN KEY ("destinatario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensaje" ADD CONSTRAINT "mensaje_remitente_id_fkey" FOREIGN KEY ("remitente_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "miembros_de_grupo" ADD CONSTRAINT "miembros_de_grupo_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "grupo"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "miembros_de_grupo" ADD CONSTRAINT "miembros_de_grupo_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notificacion" ADD CONSTRAINT "notificacion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_cat_publicacion_fkey" FOREIGN KEY ("cat_publicacion") REFERENCES "categoria_publicacion"("id_cat_publicacion") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "grupo"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_recurso_id_fkey" FOREIGN KEY ("recurso_id") REFERENCES "recurso"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reaccion" ADD CONSTRAINT "reaccion_publicacion_id_fkey" FOREIGN KEY ("publicacion_id") REFERENCES "publicacion"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reaccion" ADD CONSTRAINT "reaccion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recomendaciones" ADD CONSTRAINT "recomendaciones_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recurso" ADD CONSTRAINT "recurso_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recurso_etiqueta" ADD CONSTRAINT "recurso_etiqueta_etiqueta_id_fkey" FOREIGN KEY ("etiqueta_id") REFERENCES "etiqueta"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recurso_etiqueta" ADD CONSTRAINT "recurso_etiqueta_recurso_id_fkey" FOREIGN KEY ("recurso_id") REFERENCES "recurso"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rutas_recurso" ADD CONSTRAINT "rutas_recurso_recurso_id_fkey" FOREIGN KEY ("recurso_id") REFERENCES "recurso"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sesion" ADD CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_area_conocimiento" ADD CONSTRAINT "usuario_area_conocimiento_area_conocimiento_id_fkey" FOREIGN KEY ("area_conocimiento_id") REFERENCES "area_conocimiento"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_area_conocimiento" ADD CONSTRAINT "usuario_area_conocimiento_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_insignia" ADD CONSTRAINT "usuario_insignia_insignia_id_fkey" FOREIGN KEY ("insignia_id") REFERENCES "insignia"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_insignia" ADD CONSTRAINT "usuario_insignia_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
