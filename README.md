# Syria VPN Pro

تطبيق VPN خفيف الوزن وآمن مع خوادم أمريكية مدمجة، مُحسّن للشبكات السورية (Syriatel و MTN).

## المواصفات

- **الخوادم**: 5 خوادم أمريكية مدمجة (Seattle, Phoenix, New York, Las Vegas, Los Angeles)
- **البروتوكول**: WireGuard
- **التشفير**: AES-256-GCM
- **MTU**: 1280 (مُحسّن لشبكات Syriatel و MTN 4G/3G)
- **Keepalive**: 25 ثانية (لمنع انقطاع NAT)
- **Fraud Score**: جميع الخوادم أقل من 10%
- **لا سياسة تسجيل**: No-Log Policy

## المتطلبات

- Node.js >= 18.0.0
- npm >= 9.0.0
- Android SDK (للبناء المحلي)
- Java 17+

## التثبيت والبناء

### 1. تثبيت التبعيات

```bash
npm install --legacy-peer-deps
```

### 2. إنشاء ملفات Android الأصلية

```bash
npx expo prebuild --clean --platform android
```

### 3. بناء APK Debug (للاختبار)

```bash
cd android
export ANDROID_HOME=/path/to/android-sdk
echo "sdk.dir=/path/to/android-sdk" > local.properties
./gradlew assembleDebug
```

الملف الناتج: `android/app/build/outputs/apk/debug/app-debug.apk`

### 4. بناء APK Release (للنشر)

```bash
./gradlew assembleRelease
```

الملف الناتج: `android/app/build/outputs/apk/release/app-release.apk`

## البناء السحابي عبر EAS

إذا كنت تواجه مشاكل في البناء المحلي:

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

## الخوادم المدمجة

| المدينة | الولاية | ISP | Fraud Score |
|--------|--------|-----|------------|
| Seattle | WA | Comcast Cable (AS7922) | 3.2% |
| Phoenix | AZ | Cox Communications (AS22773) | 4.8% |
| New York | NY | Spectrum (AS11351) | 5.7% |
| Las Vegas | NV | Cox Communications (AS22773) | 3.9% |
| Los Angeles | CA | Spectrum (AS11351) | 4.6% |

## استبدال مفاتيح WireGuard

قبل النشر، استبدل مفاتيح WireGuard الوهمية بمفاتيح حقيقية:

```bash
# توليد مفاتيح جديدة
wg genkey | tee privatekey | wg pubkey > publickey

# تحديث servers.ts بالمفاتيح الحقيقية
```

## الميزات

- ✅ واجهة مستخدم داكنة حديثة
- ✅ زر اتصال متحرك
- ✅ قائمة خوادم ديناميكية
- ✅ عرض الحمل والـ Ping الحي
- ✅ تحسينات للشبكات السورية
- ✅ بدون pnpm (npm فقط)

## الترخيص

WireGuard® | AES-256-GCM | No-Log Policy

## الإصدار

v1.0.0
