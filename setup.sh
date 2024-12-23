#!/bin/bash

# 프로젝트 루트로 이동
echo "Setting up the project structure..."

# src 폴더 구조 생성
mkdir -p src/{components,styles,pages,hooks,services,utils,router}

# 공통 컴포넌트 생성
mkdir -p src/components/Button src/components/HeroSection

# 스타일 파일 생성
touch src/styles/{_variables.scss,_mixins.scss,global.scss}

# 페이지 파일 생성
touch src/pages/{HomePage.tsx,LoginPage.tsx,SignupPage.tsx}

# 라우터 파일 생성
touch src/router/{index.tsx,routesConfig.ts}

# 훅 및 서비스 파일 생성
touch src/hooks/useAuth.ts src/services/authService.ts

# 유틸리티 파일 생성
touch src/utils/validators.ts

# 컴포넌트 파일 생성
touch src/components/Button/{Button.tsx,Button.module.scss}
touch src/components/HeroSection/{HeroSection.tsx,HeroSection.module.scss}

# 주요 파일 생성
touch src/App.tsx src/main.tsx

echo "Project structure created successfully 🎉"
