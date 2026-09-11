/**
 * NƠI CHỈNH NỘI DUNG ẢNH
 *
 * 1. Chép ảnh thật vào /public/photos/ theo tên gợi ý trong `fileHint`.
 * 2. Đổi `src: null` thành `src: fileHint` ở từng ảnh đã sẵn sàng.
 * 3. Sửa `milestone`, `caption` và `date` ngay tại đây; không cần đụng component.
 * 4. Có thể đổi thứ tự các object để đổi vị trí locker trên tường.
 */

export type MilestoneId = 'cot-moc-1' | 'cot-moc-2' | 'cot-moc-3' | 'cot-moc-4';

export type MemoryPhoto = {
  id: string;
  lockerNumber: string;
  milestone: MilestoneId;
  caption: string;
  date: string;
  src: string | null;
  fileHint: string;
  accent: 'orange' | 'blue' | 'cream' | 'sage';
};

export const milestones: Array<{
  id: MilestoneId;
  label: string;
  note: string;
}> = [
  { id: 'cot-moc-1', label: 'Cột mốc 01', note: 'Những ngày đầu tại FPT' },
  { id: 'cot-moc-2', label: 'Cột mốc 02', note: 'Bạn bè & giảng đường' },
  { id: 'cot-moc-3', label: 'Cột mốc 03', note: 'Những lần rực rỡ' },
  { id: 'cot-moc-4', label: 'Cột mốc 04', note: 'Tốt nghiệp FPT' },
];

export const photos: MemoryPhoto[] = [
  {
    id: 'memory-01',
    lockerNumber: 'A01',
    milestone: 'cot-moc-1',
    caption: 'Ngày đầu tiên bước vào hành trình đại học.',
    date: 'Năm nhất · 2022',
    src: '/photos/fpt/04-dsc03629.jpeg',
    fileHint: '/photos/fpt/04-dsc03629.jpeg',
    accent: 'orange',
  },
  {
    id: 'memory-02',
    lockerNumber: 'A02',
    milestone: 'cot-moc-1',
    caption: 'Một góc campus dần trở thành nơi thân thuộc.',
    date: 'Học kỳ đầu',
    src: '/photos/fpt/05-img-1259.png',
    fileHint: '/photos/fpt/05-img-1259.png',
    accent: 'cream',
  },
  {
    id: 'memory-03',
    lockerNumber: 'A03',
    milestone: 'cot-moc-1',
    caption: 'Những buổi học đầu tiên và thật nhiều điều mới.',
    date: 'FPT University',
    src: '/photos/fpt/06-img-1371.png',
    fileHint: '/photos/fpt/06-img-1371.png',
    accent: 'blue',
  },
  {
    id: 'memory-04',
    lockerNumber: 'A04',
    milestone: 'cot-moc-1',
    caption: 'Lần đầu cả nhóm cùng đứng chung một khung hình.',
    date: 'Năm nhất',
    src: null,
    fileHint: '/photos/06-first-class-photo.jpg',
    accent: 'sage',
  },
  {
    id: 'memory-05',
    lockerNumber: 'A05',
    milestone: 'cot-moc-1',
    caption: 'Những điều vụng về nhưng đáng nhớ nhất.',
    date: '2022',
    src: null,
    fileHint: '/photos/07-early-days.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-06',
    lockerNumber: 'B01',
    milestone: 'cot-moc-2',
    caption: 'Nhóm bạn luôn để dành cho nhau một chỗ ngồi.',
    date: 'Giữa những giờ học',
    src: '/photos/fpt/07-img-4614.png',
    fileHint: '/photos/fpt/07-img-4614.png',
    accent: 'blue',
  },
  {
    id: 'memory-07',
    lockerNumber: 'B02',
    milestone: 'cot-moc-2',
    caption: 'Một buổi học nghiêm túc theo cách rất riêng.',
    date: 'Giảng đường FPT',
    src: '/photos/fpt/08-img-4957.png',
    fileHint: '/photos/fpt/08-img-4957.png',
    accent: 'cream',
  },
  {
    id: 'memory-08',
    lockerNumber: 'B03',
    milestone: 'cot-moc-2',
    caption: 'Những cuộc hẹn nhỏ sau giờ học.',
    date: 'Một chiều ở campus',
    src: '/photos/fpt/09-img-6399.jpg',
    fileHint: '/photos/fpt/09-img-6399.jpg',
    accent: 'sage',
  },
  {
    id: 'memory-09',
    lockerNumber: 'B04',
    milestone: 'cot-moc-2',
    caption: 'Có những tiếng cười không cần lý do.',
    date: 'Năm hai',
    src: null,
    fileHint: '/photos/11-laughter.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-10',
    lockerNumber: 'B05',
    milestone: 'cot-moc-2',
    caption: 'Một chuyến đi, rất nhiều câu chuyện.',
    date: 'Hoạt động sinh viên',
    src: null,
    fileHint: '/photos/12-school-trip.jpg',
    accent: 'blue',
  },
  {
    id: 'memory-11',
    lockerNumber: 'C01',
    milestone: 'cot-moc-3',
    caption: 'Ngày sân khấu sáng đèn cho tất cả chúng mình.',
    date: 'Sự kiện tại FPT',
    src: '/photos/fpt/10-img-6400.jpg',
    fileHint: '/photos/fpt/10-img-6400.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-12',
    lockerNumber: 'C02',
    milestone: 'cot-moc-3',
    caption: 'Một khoảnh khắc nhỏ, niềm vui thật lớn.',
    date: 'Thanh xuân FPT',
    src: '/photos/fpt/11-img-6402.jpg',
    fileHint: '/photos/fpt/11-img-6402.jpg',
    accent: 'sage',
  },
  {
    id: 'memory-13',
    lockerNumber: 'C03',
    milestone: 'cot-moc-3',
    caption: 'Học cách tin vào mình và những người bên cạnh.',
    date: 'Năm ba',
    src: '/photos/fpt/12-img-6403.jpg',
    fileHint: '/photos/fpt/12-img-6403.jpg',
    accent: 'cream',
  },
  {
    id: 'memory-14',
    lockerNumber: 'C04',
    milestone: 'cot-moc-3',
    caption: 'Một ngày thật rực rỡ — màu của tuổi trẻ FPT.',
    date: '2025',
    src: null,
    fileHint: '/photos/16-orange-day.jpg',
    accent: 'blue',
  },
  {
    id: 'memory-15',
    lockerNumber: 'D01',
    milestone: 'cot-moc-4',
    caption: 'Bảng đếm ngược bắt đầu ngắn lại từng ngày.',
    date: 'Chặng cuối · 2026',
    src: '/photos/fpt/13-img-6404.jpg',
    fileHint: '/photos/fpt/13-img-6404.jpg',
    accent: 'cream',
  },
  {
    id: 'memory-16',
    lockerNumber: 'D02',
    milestone: 'cot-moc-4',
    caption: 'Tấm ảnh tốt nghiệp muốn giữ thật lâu.',
    date: 'Graduation · 2026',
    src: '/photos/fpt/01-alex-108.jpeg',
    fileHint: '/photos/fpt/01-alex-108.jpeg',
    accent: 'orange',
  },
  {
    id: 'memory-17',
    lockerNumber: 'D03',
    milestone: 'cot-moc-4',
    caption: 'Một trong những lần cuối cùng cùng nhau ở campus.',
    date: 'Năm cuối · 2026',
    src: '/photos/fpt/15-img-6408.jpg',
    fileHint: '/photos/fpt/15-img-6408.jpg',
    accent: 'sage',
  },
  {
    id: 'memory-18',
    lockerNumber: 'D04',
    milestone: 'cot-moc-4',
    caption: 'Cánh cửa khép lại để một hành trình khác bắt đầu.',
    date: 'Ngày trưởng thành',
    src: null,
    fileHint: '/photos/20-graduation.jpg',
    accent: 'blue',
  },
];

/**
 * Ba ảnh lớn của trang. Sau khi chép file thật vào /public/photos/,
 * đổi `src` từ null sang đúng `fileHint` tương ứng.
 */
export const featuredMedia: Record<
  'hero' | 'honorable' | 'outro',
  { src: string | null; fileHint: string; label: string }
> = {
  hero: {
    src: '/photos/fpt/14-img-6406.jpg',
    fileHint: '/photos/fpt/14-img-6406.jpg',
    label: 'Võ Lê Trường Huy trong lễ phục tốt nghiệp FPT',
  },
  honorable: {
    src: '/photos/fpt/02-b0ops-57.jpeg',
    fileHint: '/photos/fpt/02-b0ops-57.jpeg',
    label: 'Ảnh kỷ niệm tại Trường Đại học FPT',
  },
  outro: {
    src: '/photos/fpt/15-img-6403.jpg',
    fileHint: '/photos/fpt/15-img-6403.jpg',
    label: 'Võ Lê Trường Huy nhìn về phía cửa sổ trong lễ phục tốt nghiệp',
  },
};

/** Những thông tin TODO chính cần thay trước khi gửi thiệp thật. */
export const invitationDetails = {
  graduateName: 'Võ Lê Trường Huy',
  ceremonyDate: '2026-09-12T07:00:00+07:00',
  dateLabel: '07:00 · Thứ Bảy, 12.09.2026',
  venue: 'FPT University Đà Nẵng',
  address: 'Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng',
  closingMessage:
    'Cảm ơn bạn đã ghé qua và xem hết những kỷ niệm này. Hẹn gặp bạn trong ngày tốt nghiệp — còn nếu không thể có mặt, mình vẫn rất vui khi nhận được vài lời nhắn từ bạn.',
};
