import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAutorizacaoFuncionamentoAutorizacaoFuncionamento
  extends Schema.CollectionType {
  collectionName: 'autorizacao_funcionamentos';
  info: {
    singularName: 'autorizacao-funcionamento';
    pluralName: 'autorizacao-funcionamentos';
    displayName: 'autorizacao_funcionamento';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    versao: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::autorizacao-funcionamento.autorizacao-funcionamento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::autorizacao-funcionamento.autorizacao-funcionamento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAvisoAviso extends Schema.CollectionType {
  collectionName: 'avisos';
  info: {
    singularName: 'aviso';
    pluralName: 'avisos';
    displayName: 'Avisos';
    description: 'Avisos importantes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    mensagem: Attribute.RichText;
    urgente: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::aviso.aviso',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::aviso.aviso',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoriaEqavetCategoriaEqavet
  extends Schema.CollectionType {
  collectionName: 'categoria_eqavets';
  info: {
    singularName: 'categoria-eqavet';
    pluralName: 'categoria-eqavets';
    displayName: 'selo_Conformidade_EQAVET';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    descricao: Attribute.Blocks;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::categoria-eqavet.categoria-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::categoria-eqavet.categoria-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCertificacaoEqavet20202023CertificacaoEqavet20202023
  extends Schema.CollectionType {
  collectionName: 'certificacao_eqavet_2020_2023s';
  info: {
    singularName: 'certificacao-eqavet-2020-2023';
    pluralName: 'certificacao-eqavet-2020-2023s';
    displayName: 'certificacao_eqavet_2020_2023';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    descricao: Attribute.Blocks;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::certificacao-eqavet-2020-2023.certificacao-eqavet-2020-2023',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::certificacao-eqavet-2020-2023.certificacao-eqavet-2020-2023',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCursoCurso extends Schema.CollectionType {
  collectionName: 'cursos';
  info: {
    singularName: 'curso';
    pluralName: 'cursos';
    displayName: 'Cursos';
    description: 'Cursos oferecidos';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nome: Attribute.String & Attribute.Required;
    descricao: Attribute.RichText;
    duracao: Attribute.String;
    imagem: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::curso.curso',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::curso.curso',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentoBaseEqavetDocumentoBaseEqavet
  extends Schema.CollectionType {
  collectionName: 'documento_base_eqavets';
  info: {
    singularName: 'documento-base-eqavet';
    pluralName: 'documento-base-eqavets';
    displayName: 'documento_base_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documento-base-eqavet.documento-base-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::documento-base-eqavet.documento-base-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEstatutoEstatuto extends Schema.CollectionType {
  collectionName: 'estatutos';
  info: {
    singularName: 'estatuto';
    pluralName: 'estatutos';
    displayName: 'estatuto';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    versao: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::estatuto.estatuto',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::estatuto.estatuto',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventoEvento extends Schema.CollectionType {
  collectionName: 'eventos';
  info: {
    singularName: 'evento';
    pluralName: 'eventos';
    displayName: 'Eventos';
    description: 'Eventos da escola';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    descricao: Attribute.RichText;
    data: Attribute.Date;
    local: Attribute.String;
    imagem: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::evento.evento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::evento.evento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFichaOperacaoFichaOperacao extends Schema.CollectionType {
  collectionName: 'ficha_operacaos';
  info: {
    singularName: 'ficha-operacao';
    pluralName: 'ficha-operacaos';
    displayName: 'ficha_operacao';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ficha-operacao.ficha-operacao',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ficha-operacao.ficha-operacao',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGuiaoEducacaoInclusivaGuiaoEducacaoInclusiva
  extends Schema.CollectionType {
  collectionName: 'guiao_educacao_inclusivas';
  info: {
    singularName: 'guiao-educacao-inclusiva';
    pluralName: 'guiao-educacao-inclusivas';
    displayName: 'guiao_educacao_inclusiva';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::guiao-educacao-inclusiva.guiao-educacao-inclusiva',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::guiao-educacao-inclusiva.guiao-educacao-inclusiva',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLegislacaoApoioLegislacaoApoio
  extends Schema.CollectionType {
  collectionName: 'legislacao_apoios';
  info: {
    singularName: 'legislacao-apoio';
    pluralName: 'legislacao-apoios';
    displayName: 'legislacao_apoio';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::legislacao-apoio.legislacao-apoio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::legislacao-apoio.legislacao-apoio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiManualProcessosEqavetManualProcessosEqavet
  extends Schema.CollectionType {
  collectionName: 'manual_processos_eqavets';
  info: {
    singularName: 'manual-processos-eqavet';
    pluralName: 'manual-processos-eqavets';
    displayName: ' manual_processos_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    descricao: Attribute.Blocks;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::manual-processos-eqavet.manual-processos-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::manual-processos-eqavet.manual-processos-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNoticiaNoticia extends Schema.CollectionType {
  collectionName: 'noticias';
  info: {
    singularName: 'noticia';
    pluralName: 'noticias';
    displayName: 'Not\u00EDcias';
    description: 'Not\u00EDcias da escola';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText;
    descricao: Attribute.Text;
    data: Attribute.Date;
    imagem: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::noticia.noticia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::noticia.noticia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizacaoEscolarOrganizacaoEscolar
  extends Schema.CollectionType {
  collectionName: 'organizacao_escolars';
  info: {
    singularName: 'organizacao-escolar';
    pluralName: 'organizacao-escolars';
    displayName: 'organizacao_escolar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organizacao-escolar.organizacao-escolar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organizacao-escolar.organizacao-escolar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPlanoAcaoEqavetPlanoAcaoEqavet
  extends Schema.CollectionType {
  collectionName: 'plano_acao_eqavets';
  info: {
    singularName: 'plano-acao-eqavet';
    pluralName: 'plano-acao-eqavets';
    displayName: 'plano_acao_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    descricao: Attribute.Blocks;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::plano-acao-eqavet.plano-acao-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::plano-acao-eqavet.plano-acao-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPlanoAcaoIntegradoEqavetPlanoAcaoIntegradoEqavet
  extends Schema.CollectionType {
  collectionName: 'plano_acao_integrado_eqavets';
  info: {
    singularName: 'plano-acao-integrado-eqavet';
    pluralName: 'plano-acao-integrado-eqavets';
    displayName: 'plano_acao_integrado_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    descricao: Attribute.Blocks;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPoliticaPrivacidadePoliticaPrivacidade
  extends Schema.CollectionType {
  collectionName: 'politica_privacidades';
  info: {
    singularName: 'politica-privacidade';
    pluralName: 'politica-privacidades';
    displayName: 'politica_privacidade';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::politica-privacidade.politica-privacidade',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::politica-privacidade.politica-privacidade',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjetoEducativoProjetoEducativo
  extends Schema.CollectionType {
  collectionName: 'projeto_educativos';
  info: {
    singularName: 'projeto-educativo';
    pluralName: 'projeto-educativos';
    displayName: 'projeto_educativo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    descricao: Attribute.Blocks;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::projeto-educativo.projeto-educativo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::projeto-educativo.projeto-educativo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegulamentoInternoRegulamentoInterno
  extends Schema.CollectionType {
  collectionName: 'regulamento_internos';
  info: {
    singularName: 'regulamento-interno';
    pluralName: 'regulamento-internos';
    displayName: 'regulamento_interno';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::regulamento-interno.regulamento-interno',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::regulamento-interno.regulamento-interno',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRelatorioAcompanhamentoEqavetRelatorioAcompanhamentoEqavet
  extends Schema.CollectionType {
  collectionName: 'relatorio_acompanhamento_eqavets';
  info: {
    singularName: 'relatorio-acompanhamento-eqavet';
    pluralName: 'relatorio-acompanhamento-eqavets';
    displayName: 'relatorio_acompanhamento_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    descricao: Attribute.Blocks;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::relatorio-acompanhamento-eqavet.relatorio-acompanhamento-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::relatorio-acompanhamento-eqavet.relatorio-acompanhamento-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRelatorioOperadorEqavetRelatorioOperadorEqavet
  extends Schema.CollectionType {
  collectionName: 'relatorio_operador_eqavets';
  info: {
    singularName: 'relatorio-operador-eqavet';
    pluralName: 'relatorio-operador-eqavets';
    displayName: 'relatorio_operador_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    descricao: Attribute.Blocks;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::relatorio-operador-eqavet.relatorio-operador-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::relatorio-operador-eqavet.relatorio-operador-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRelatorioProgressoAnualEqavetRelatorioProgressoAnualEqavet
  extends Schema.CollectionType {
  collectionName: 'relatorio_progresso_anual_eqavets';
  info: {
    singularName: 'relatorio-progresso-anual-eqavet';
    pluralName: 'relatorio-progresso-anual-eqavets';
    displayName: 'relatorio_progresso_anual_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    aruivo_pdf: Attribute.Media;
    descricao: Attribute.Blocks;
    data_publicacao: Attribute.Date;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRelatorioVerificacaoEqavetRelatorioVerificacaoEqavet
  extends Schema.CollectionType {
  collectionName: 'relatorio_verificacao_eqavets';
  info: {
    singularName: 'relatorio-verificacao-eqavet';
    pluralName: 'relatorio-verificacao-eqavets';
    displayName: ' relatorio_verificacao_eqavet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    arquivo_pdf: Attribute.Media;
    data_publicacao: Attribute.Date;
    descricao: Attribute.Blocks;
    versao: Attribute.String;
    ativo: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::autorizacao-funcionamento.autorizacao-funcionamento': ApiAutorizacaoFuncionamentoAutorizacaoFuncionamento;
      'api::aviso.aviso': ApiAvisoAviso;
      'api::categoria-eqavet.categoria-eqavet': ApiCategoriaEqavetCategoriaEqavet;
      'api::certificacao-eqavet-2020-2023.certificacao-eqavet-2020-2023': ApiCertificacaoEqavet20202023CertificacaoEqavet20202023;
      'api::curso.curso': ApiCursoCurso;
      'api::documento-base-eqavet.documento-base-eqavet': ApiDocumentoBaseEqavetDocumentoBaseEqavet;
      'api::estatuto.estatuto': ApiEstatutoEstatuto;
      'api::evento.evento': ApiEventoEvento;
      'api::ficha-operacao.ficha-operacao': ApiFichaOperacaoFichaOperacao;
      'api::guiao-educacao-inclusiva.guiao-educacao-inclusiva': ApiGuiaoEducacaoInclusivaGuiaoEducacaoInclusiva;
      'api::legislacao-apoio.legislacao-apoio': ApiLegislacaoApoioLegislacaoApoio;
      'api::manual-processos-eqavet.manual-processos-eqavet': ApiManualProcessosEqavetManualProcessosEqavet;
      'api::noticia.noticia': ApiNoticiaNoticia;
      'api::organizacao-escolar.organizacao-escolar': ApiOrganizacaoEscolarOrganizacaoEscolar;
      'api::plano-acao-eqavet.plano-acao-eqavet': ApiPlanoAcaoEqavetPlanoAcaoEqavet;
      'api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet': ApiPlanoAcaoIntegradoEqavetPlanoAcaoIntegradoEqavet;
      'api::politica-privacidade.politica-privacidade': ApiPoliticaPrivacidadePoliticaPrivacidade;
      'api::projeto-educativo.projeto-educativo': ApiProjetoEducativoProjetoEducativo;
      'api::regulamento-interno.regulamento-interno': ApiRegulamentoInternoRegulamentoInterno;
      'api::relatorio-acompanhamento-eqavet.relatorio-acompanhamento-eqavet': ApiRelatorioAcompanhamentoEqavetRelatorioAcompanhamentoEqavet;
      'api::relatorio-operador-eqavet.relatorio-operador-eqavet': ApiRelatorioOperadorEqavetRelatorioOperadorEqavet;
      'api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet': ApiRelatorioProgressoAnualEqavetRelatorioProgressoAnualEqavet;
      'api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet': ApiRelatorioVerificacaoEqavetRelatorioVerificacaoEqavet;
    }
  }
}
