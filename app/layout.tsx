import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/noto-serif';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mở Khóa Kỷ Niệm · Thiệp mời tốt nghiệp',
  description:
    'Một bức tường locker lưu giữ hành trình 12 năm và lời mời đến ngày tốt nghiệp.',
  openGraph: {
    title: 'Mở Khóa Kỷ Niệm · Thiệp mời tốt nghiệp',
    description:
      'Mở từng cánh locker, gặp lại hành trình 12 năm và hẹn nhau ở ngày trưởng thành.',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mở Khóa Kỷ Niệm · Thiệp mời tốt nghiệp',
    description:
      'Mở từng cánh locker, gặp lại hành trình 12 năm và hẹn nhau ở ngày trưởng thành.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
