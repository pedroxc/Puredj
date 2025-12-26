# Instruções de Deploy - PureDJ

## 📦 Preparação para Deploy

### 1. Mover Arquivos

Certifique-se que os arquivos estão nas pastas corretas:

```bash
# Mova o logo e favicon para assets/images/
mv logo.png assets/images/
mv favicon.ico assets/images/

# Mova a fonte para assets/fonts/
mv ethnocentric.otf assets/fonts/

# Renomeie o arquivo principal
mv index-new.html index.html

# Delete arquivos antigos
rm index.html.old (se existir)
```

### 2. Verificar Estrutura

Sua estrutura deve estar assim:

```
Puredjmock/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── tailwind.config.js
│   │   ├── streaminfo.js
│   │   ├── navigation.js
│   │   ├── player.js
│   │   └── utils.js
│   ├── images/
│   │   ├── logo.png
│   │   └── favicon.ico
│   └── fonts/
│       └── ethnocentric.otf
├── .editorconfig
├── .gitignore
├── .htaccess
├── .prettierrc
├── index.html
├── proxy-stream.php
├── package.json
├── README.md
└── INSTRUCTIONS.md
```

## 🚀 Deploy para Produção

### Via FTP

1. Conecte ao servidor via FTP
2. Faça upload de todos os arquivos mantendo a estrutura de pastas
3. Verifique permissões:
   - Arquivos: 644
   - Pastas: 755
   - proxy-stream.php: 644

### Via Git

```bash
# Inicialize o repositório
git init

# Adicione remote
git remote add origin <seu-repositorio>

# Faça commit
git add .
git commit -m "Initial commit - PureDJ Platform"

# Push para repositório
git push -u origin main
```

### Configurações no Servidor

1. **PHP**: Certifique-se que está habilitado
2. **HTTPS**: Configure SSL/TLS
3. **Headers**: Verifique se .htaccess está funcionando

## ✅ Checklist Pós-Deploy

- [ ] Site carrega corretamente em HTTPS
- [ ] Logo aparece no header e footer
- [ ] Favicon aparece na aba do navegador
- [ ] Fonte Ethnocentric carrega corretamente
- [ ] Player de áudio funciona
- [ ] Stream info atualiza automaticamente
- [ ] Marquee exibe mensagens
- [ ] Links de redes sociais funcionam
- [ ] Email de contato abre cliente de email
- [ ] Ano no footer é dinâmico
- [ ] Volume controls funcionam
- [ ] Mute salva e restaura volume

## 🔧 Troubleshooting

### Stream Info não atualiza
- Verifique se proxy-stream.php tem permissões corretas
- Teste acessando proxy-stream.php diretamente
- Verifique console do browser (F12)

### Imagens não aparecem
- Verifique caminhos no HTML
- Confirme que arquivos foram enviados
- Verifique permissões (644)

### Fonte customizada não carrega
- Confirme que ethnocentric.otf está em assets/fonts/
- Verifique MIME type no servidor
- Teste acesso direto ao arquivo

### Mixed Content Error
- Certifique-se que site está em HTTPS
- Verifique meta tag upgrade-insecure-requests
- Confirme que proxy-stream.php está funcionando

## 📞 Suporte

Para problemas técnicos, verifique:
1. Console do navegador (F12 > Console)
2. Network tab (F12 > Network)
3. Logs do servidor PHP
4. Arquivo .htaccess está ativo

## 🎯 Próximos Passos

1. Configure analytics (Google Analytics)
2. Adicione OG tags para compartilhamento social
3. Configure sitemap.xml
4. Adicione robots.txt
5. Configure CDN (Cloudflare)
6. Implemente cache strategy
7. Adicione PWA support
