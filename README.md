<!-- omit in toc -->
# Kubernetes CronJob Sample

CronJob動作検証用サンプルプログラムです。

- [webapp](#webapp)
  - [API一覧](#api一覧)
  - [Node.jsのバージョン](#nodejsのバージョン)
  - [Dockerイメージ作成手順](#dockerイメージ作成手順)
- [kustomize](#kustomize)

## [webapp](webapp/)

CronJobから呼び出されるWebAPIアプリです。

Node.js Expressで実装しています。

### API一覧

|URL|概要|
|---|---|
|`/wait/:seconds`|指定された秒数待ってからレスポンスします。|

### Node.jsのバージョン

現在のバージョンは「16.15.0」です。変更する場合は下記ファイルを編集します。

- [.node-version](.node-version)
- [Dockerfile](webapp/Dockerfile)

### Dockerイメージ作成手順

```bash
cd webapp
chmod +x docker-build.sh
./docker-build.sh
```

## [kustomize](kustomize/)

KubernetesにデプロイするためのYamlファイル群です。

CronJobを含んでいます。
