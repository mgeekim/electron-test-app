# Electron 테스트 앱

이것은 사이드바와 이미지 파일 로더가 있는 간단한 Electron 애플리케이션입니다.

## 전제 조건

이 애플리케이션을 실행하고 빌드하려면 다음이 설치되어 있어야 합니다:

*   [Node.js](https://nodejs.org/) (npm 포함)

Linux에서 Windows 실행 파일을 빌드하려면 다음도 필요합니다:

*   `wine64`
*   `mono-complete`

    Debian/Ubuntu 기반 시스템에서는 다음을 사용하여 설치할 수 있습니다:
    ```bash
    sudo apt-get update
    sudo apt-get install -y wine64 mono-complete
    ```

## 설치

먼저 `electron-test-app` 디렉토리로 이동하여 프로젝트 종속성을 설치합니다:

```bash
cd electron-test-app
npm install
```

## 애플리케이션 실행

개발 모드에서 애플리케이션을 실행하려면:

```bash
npm start
```

## 애플리케이션 빌드

### Linux용 빌드

Linux용 배포 가능한 패키지를 빌드하려면:

```bash
npm run make
```

### Windows용 빌드 (Linux에서)

Windows용 배포 가능한 `.exe` 패키지를 빌드하려면 (Linux 시스템에 `wine64` 및 `mono-complete`가 설치되어 있어야 함):

```bash
npm run make:windows
```

빌드가 성공적으로 완료되면 생성된 실행 파일은 `out/` 디렉토리에 있습니다.
