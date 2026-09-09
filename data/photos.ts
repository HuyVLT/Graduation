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
  { id: 'cot-moc-1', label: 'Cột mốc 01', note: 'Những ngày đầu' },
  { id: 'cot-moc-2', label: 'Cột mốc 02', note: 'Bạn bè & lớp học' },
  { id: 'cot-moc-3', label: 'Cột mốc 03', note: 'Những lần rực rỡ' },
  { id: 'cot-moc-4', label: 'Cột mốc 04', note: 'Chương cuối cấp' },
];

export const photos: MemoryPhoto[] = [
  {
    id: 'memory-01',
    lockerNumber: 'A01',
    milestone: 'cot-moc-1',
    caption: 'Ngày đầu tiên bước qua cánh cổng mới.',
    date: 'Tháng 9 · 2023',
    src: null,
    fileHint: '/photos/03-first-day.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-02',
    lockerNumber: 'A02',
    milestone: 'cot-moc-1',
    caption: 'Một góc lớp học dần trở thành nơi thân thuộc.',
    date: 'Học kỳ I',
    src: null,
    fileHint: '/photos/04-classroom.jpg',
    accent: 'cream',
  },
  {
    id: 'memory-03',
    lockerNumber: 'A03',
    milestone: 'cot-moc-1',
    caption: 'Buổi chào cờ và những câu chuyện đầu tuần.',
    date: 'Sân trường',
    src: null,
    fileHint: '/photos/05-school-yard.jpg',
    accent: 'blue',
  },
  {
    id: 'memory-04',
    lockerNumber: 'A04',
    milestone: 'cot-moc-1',
    caption: 'Lần đầu cả lớp cùng đứng chung một khung hình.',
    date: 'Năm lớp 10',
    src: null,
    fileHint: '/photos/06-first-class-photo.jpg',
    accent: 'sage',
  },
  {
    id: 'memory-05',
    lockerNumber: 'A05',
    milestone: 'cot-moc-1',
    caption: 'Những điều vụng về nhưng đáng nhớ nhất.',
    date: '2023',
    src: null,
    fileHint: '/photos/07-early-days.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-06',
    lockerNumber: 'B01',
    milestone: 'cot-moc-2',
    caption: 'Nhóm bạn luôn để dành cho nhau một chỗ ngồi.',
    date: 'Giờ ra chơi',
    src: null,
    fileHint: '/photos/08-best-friends.jpg',
    accent: 'blue',
  },
  {
    id: 'memory-07',
    lockerNumber: 'B02',
    milestone: 'cot-moc-2',
    caption: 'Một tiết học nghiêm túc theo cách rất riêng.',
    date: 'Phòng 12A',
    src: null,
    fileHint: '/photos/09-study-time.jpg',
    accent: 'cream',
  },
  {
    id: 'memory-08',
    lockerNumber: 'B03',
    milestone: 'cot-moc-2',
    caption: 'Những bữa quà vặt sau giờ tan học.',
    date: 'Một chiều mưa',
    src: null,
    fileHint: '/photos/10-after-school.jpg',
    accent: 'sage',
  },
  {
    id: 'memory-09',
    lockerNumber: 'B04',
    milestone: 'cot-moc-2',
    caption: 'Có những tiếng cười không cần lý do.',
    date: 'Năm lớp 11',
    src: null,
    fileHint: '/photos/11-laughter.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-10',
    lockerNumber: 'B05',
    milestone: 'cot-moc-2',
    caption: 'Một chuyến đi, rất nhiều câu chuyện.',
    date: 'Ngoại khóa',
    src: null,
    fileHint: '/photos/12-school-trip.jpg',
    accent: 'blue',
  },
  {
    id: 'memory-11',
    lockerNumber: 'C01',
    milestone: 'cot-moc-3',
    caption: 'Ngày sân khấu sáng đèn cho tất cả chúng mình.',
    date: 'Văn nghệ · 2025',
    src: null,
    fileHint: '/photos/13-performance.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-12',
    lockerNumber: 'C02',
    milestone: 'cot-moc-3',
    caption: 'Một chiến thắng nhỏ, niềm vui thật lớn.',
    date: 'Hội thao',
    src: null,
    fileHint: '/photos/14-sports-day.jpg',
    accent: 'sage',
  },
  {
    id: 'memory-13',
    lockerNumber: 'C03',
    milestone: 'cot-moc-3',
    caption: 'Học cách tin vào mình và những người bên cạnh.',
    date: 'Năm lớp 11',
    src: null,
    fileHint: '/photos/15-achievement.jpg',
    accent: 'cream',
  },
  {
    id: 'memory-14',
    lockerNumber: 'C04',
    milestone: 'cot-moc-3',
    caption: 'Một ngày thật cam — màu của tuổi trẻ rực rỡ.',
    date: 'Mùa hè · 2025',
    src: null,
    fileHint: '/photos/16-orange-day.jpg',
    accent: 'blue',
  },
  {
    id: 'memory-15',
    lockerNumber: 'D01',
    milestone: 'cot-moc-4',
    caption: 'Bảng đếm ngược bắt đầu ngắn lại từng ngày.',
    date: '100 ngày cuối',
    src: null,
    fileHint: '/photos/17-countdown.jpg',
    accent: 'cream',
  },
  {
    id: 'memory-16',
    lockerNumber: 'D02',
    milestone: 'cot-moc-4',
    caption: 'Tấm ảnh kỷ yếu mà ai cũng muốn giữ thật lâu.',
    date: 'Kỷ yếu · 2026',
    src: null,
    fileHint: '/photos/18-yearbook.jpg',
    accent: 'orange',
  },
  {
    id: 'memory-17',
    lockerNumber: 'D03',
    milestone: 'cot-moc-4',
    caption: 'Lần cuối cùng cùng nhau trực nhật.',
    date: 'Tháng 5 · 2026',
    src: null,
    fileHint: '/photos/19-last-class.jpg',
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
    src: null,
    fileHint: '/photos/01-hero.jpg',
    label: 'Ảnh hero · ngồi bên bàn học',
  },
  honorable: {
    src: null,
    fileHint: '/photos/02-honorable-mention.jpg',
    label: 'Ảnh trường THPT Lê Quý Đôn',
  },
  outro: {
    src: null,
    fileHint: '/photos/21-outro.jpg',
    label: 'Ảnh outro · nhóm bạn cùng đi tiếp',
  },
};

/** Những thông tin TODO chính cần thay trước khi gửi thiệp thật. */
export const invitationDetails = {
  graduateName: '[Tên của bạn]',
  ceremonyDate: '2026-12-20T08:00:00+07:00',
  dateLabel: '08:00 · Chủ nhật, 20.12.2026',
  venue: '[Địa điểm tổ chức]',
  address: '[Địa chỉ chi tiết sẽ được cập nhật]',
  dressCode: '[Dress code nếu có]',
  closingMessage:
    '[Lời nhắn của bạn] Cảm ơn vì đã trở thành một phần của hành trình này. Mong chúng ta sẽ gặp nhau ở ngày đặc biệt ấy — và ở thật nhiều chương rực rỡ phía trước.',
};
