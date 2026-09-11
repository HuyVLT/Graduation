'use client';

import Image from 'next/image';
import {
  MotionConfig,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Clock3,
  GraduationCap,
  LockKeyhole,
  LockKeyholeOpen,
  MapPin,
  Music2,
  Pause,
  Sparkles,
} from 'lucide-react';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  invitationDetails,
  featuredMedia,
} from '@/data/photos';

const revealTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

const unlockSparkDirections = [
  [0, -74], [52, -52], [74, 0], [52, 52],
  [0, 74], [-52, 52], [-74, 0], [-52, -52],
];

function PageIntro() {
  return (
    <motion.div
      className="page-intro"
      initial={{ opacity: 1, visibility: 'visible' }}
      animate={{ opacity: [1, 1, 0], visibility: ['visible', 'visible', 'hidden'] }}
      transition={{ duration: 2.55, times: [0, 0.9, 1], ease: 'easeOut' }}
      aria-hidden="true"
    >
      <motion.div
        className="intro-curtain intro-curtain-left"
        initial={{ x: 0 }}
        animate={{ x: '-102%' }}
        transition={{ duration: 0.9, delay: 1.35, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="intro-curtain intro-curtain-right"
        initial={{ x: 0 }}
        animate={{ x: '102%' }}
        transition={{ duration: 0.9, delay: 1.35, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="intro-lock-stage"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{ duration: 1.85, times: [0, 0.72, 1], ease: 'easeOut' }}
      >
        <motion.div
          className="intro-lock intro-lock-closed"
          initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.72, 1, 1.04, 0.9], rotate: [-8, 0, 0, -8] }}
          transition={{ duration: 1.38, times: [0, 0.2, 0.66, 1], ease: 'easeOut' }}
        >
          <LockKeyhole aria-hidden="true" />
        </motion.div>
        <motion.div
          className="intro-lock intro-lock-open"
          initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
          animate={{ opacity: [0, 0, 1, 0], scale: [0.9, 0.9, 1.06, 1.24], rotate: [8, 8, 0, -8] }}
          transition={{ duration: 1.55, times: [0, 0.5, 0.68, 1], ease: 'easeOut' }}
        >
          <LockKeyholeOpen aria-hidden="true" />
        </motion.div>
        <div className="intro-sparks">
          {unlockSparkDirections.map(([x, y], index) => (
            <motion.i
              key={`${x}-${y}`}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
              animate={{ opacity: [0, 0, 1, 0], x: [0, 0, x], y: [0, 0, y], scale: [0.4, 0.4, 1, 0] }}
              transition={{ duration: 1.55, delay: index * 0.015, times: [0, 0.52, 0.7, 1], ease: 'easeOut' }}
            />
          ))}
        </div>
        <motion.span
          className="intro-copy"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -8] }}
          transition={{ duration: 1.7, times: [0, 0.2, 0.7, 1] }}
        >
          Mở khóa kỷ niệm · FPT 2026
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function BinocularGraduationPhoto() {
  const finalRadius = 2.5;

  return (
    <div className="graduated-image binocular-graduation">
      <motion.svg
        viewBox="0 0 2 3"
        role="img"
        aria-labelledby="binocular-photo-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
      >
        <title id="binocular-photo-title">Võ Lê Trường Huy tạo dáng như nhìn qua ống nhòm trong lễ phục tốt nghiệp</title>
        <defs>
          <mask id="graduation-binocular-mask">
            <rect width="2" height="3" fill="black" />
            <motion.circle
              cx="0.86"
              cy="0.98"
              fill="white"
              variants={{ hidden: { r: 0 }, visible: { r: finalRadius } }}
              transition={{ duration: 1.35, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.circle
              cx="1.17"
              cy="0.98"
              fill="white"
              variants={{ hidden: { r: 0 }, visible: { r: finalRadius } }}
              transition={{ duration: 1.35, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
          </mask>
        </defs>
        <image
          href="/photos/graduated/auditorium.jpg"
          width="2"
          height="3"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#graduation-binocular-mask)"
        />
        <motion.g
          className="binocular-rings"
          fill="none"
          stroke="#f97316"
          strokeWidth="0.025"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 1.15, times: [0, 0.18, 0.68, 1] }}
        >
          <circle cx="0.86" cy="0.98" r="0.2" />
          <circle cx="1.17" cy="0.98" r="0.2" />
          <path d="M1.06 .98h-.09" />
        </motion.g>
      </motion.svg>
      <span className="binocular-label" aria-hidden="true">Nhìn lại · Đi tiếp</span>
    </div>
  );
}

function SectionReveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  );
}

function FeaturedPlaceholder({
  label,
  fileHint,
}: {
  label: string;
  fileHint: string;
}) {
  return (
    <div className="featured-placeholder">
      <span className="featured-placeholder-icon" aria-hidden="true">
        <Camera size={24} strokeWidth={1.35} />
      </span>
      <strong>{label}</strong>
      <small>{fileHint}</small>
      <em>Thêm ảnh của bạn trong data/photos.ts</em>
    </div>
  );
}

function Countdown() {
  const target = useMemo(
    () => new Date(invitationDetails.ceremonyDate).getTime(),
    [],
  );
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const distance = Math.max(0, target - Date.now());
      setRemaining({
        days: Math.floor(distance / 86_400_000),
        hours: Math.floor((distance / 3_600_000) % 24),
        minutes: Math.floor((distance / 60_000) % 60),
        seconds: Math.floor((distance / 1_000) % 60),
      });
    };

    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [target]);

  const units = [
    ['Ngày', remaining.days],
    ['Giờ', remaining.hours],
    ['Phút', remaining.minutes],
    ['Giây', remaining.seconds],
  ];

  return (
    <div className="countdown" aria-label="Thời gian còn lại đến buổi lễ">
      {units.map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function InvitationExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const musicPlayerRef = useRef<HTMLIFrameElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  const sendMusicCommand = (func: string, args: number[] = []) => {
    musicPlayerRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func,
        args,
      }),
      'https://www.youtube-nocookie.com',
    );
  };

  const startBackgroundMusic = () => {
    const startAtLowVolume = () => {
      sendMusicCommand('setVolume', [20]);
      sendMusicCommand('playVideo');
    };

    startAtLowVolume();
    window.setTimeout(startAtLowVolume, 450);
    window.setTimeout(startAtLowVolume, 1100);
  };

  const toggleMusic = () => {
    const nextPlayingState = !isMusicPlaying;
    sendMusicCommand(nextPlayingState ? 'playVideo' : 'pauseVideo');
    setIsMusicPlaying(nextPlayingState);
  };

  return (
    <MotionConfig reducedMotion="user">
      <PageIntro />
      <iframe
        ref={musicPlayerRef}
        className="youtube-music-player"
        src="https://www.youtube-nocookie.com/embed/lV0OOyDUPII?autoplay=1&enablejsapi=1&playsinline=1&loop=1&playlist=lV0OOyDUPII"
        title="Nhạc nền cho thiệp tốt nghiệp"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
        onLoad={startBackgroundMusic}
      />
      <motion.button
        type="button"
        className={`music-toggle ${isMusicPlaying ? 'is-playing' : ''}`}
        onClick={toggleMusic}
        aria-label={isMusicPlaying ? 'Tạm dừng nhạc nền' : 'Phát nhạc nền'}
        aria-pressed={isMusicPlaying}
        whileTap={{ scale: 0.94 }}
      >
        <span className="music-toggle-icon" aria-hidden="true">
          {isMusicPlaying ? <Pause /> : <Music2 />}
        </span>
        <span>{isMusicPlaying ? 'Đang phát' : 'Bật nhạc'}</span>
      </motion.button>
      <main>
        <section className="hero" ref={heroRef} aria-labelledby="hero-title">
          <motion.div
            className="hero-image-layer"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: heroY, scale: heroScale }}
          >
            {featuredMedia.hero.src ? (
              <Image
                src={featuredMedia.hero.src}
                alt="Võ Lê Trường Huy trong lễ phục tốt nghiệp FPT"
                fill
                priority
                unoptimized
                sizes="100vw"
                className="hero-image"
              />
            ) : (
              <FeaturedPlaceholder {...featuredMedia.hero} />
            )}
          </motion.div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />

          <div className="hero-content" id="top">
            <motion.p
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ...revealTransition }}
            >
              Một lời mời · Một cuốn kỷ yếu
            </motion.p>
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...revealTransition }}
            >
              Mở khóa
              <em>kỷ niệm.</em>
            </motion.h1>
            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, ...revealTransition }}
            >
              Chào mừng đến hành trình bốn năm tại FPT của{' '}
              <strong>{invitationDetails.graduateName}</strong>. Mỗi cánh cửa là
              một câu chuyện đang chờ được kể.
            </motion.p>
          </div>

          <div className="hero-footer">
            <a href="#honorable" className="scroll-cue">
              <span>Cuộn để mở</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <ArrowDown size={17} />
              </motion.span>
            </a>
            <p>FPT UNIVERSITY · KHOÁ 2022–2026</p>
          </div>
        </section>

        <section className="honorable-section" id="honorable" aria-labelledby="honorable-title">
          <SectionReveal className="honorable-wrap">
            <div className="section-index section-index-dark">
              <span>00</span>
              <span>Honorable mention</span>
            </div>
            <div className="honorable-grid">
              <div className="honorable-copy">
                <p className="mini-label">Bốn năm thanh xuân</p>
                <h2 id="honorable-title">FPT<br />University</h2>
                <p className="honorable-text">
                  Cảm ơn FPT đã cho những bài học, những người bạn và một hành
                  trình trưởng thành không thể lặp lại.
                </p>
                <div className="school-signature">
                  <GraduationCap size={24} strokeWidth={1.4} />
                  <span>Bốn năm · Một hành trình</span>
                </div>
              </div>
              <motion.div
                className="honorable-art"
                initial={{ opacity: 0, x: 44 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.15, ...revealTransition }}
              >
                <div className="medal-ribbon" aria-hidden="true" />
                <div className="school-photo-frame">
                  <div className="school-photo">
                    {featuredMedia.honorable.src ? (
                      <Image
                        src={featuredMedia.honorable.src}
                        alt="Kỷ niệm tại Trường Đại học FPT"
                        fill
                        unoptimized
                        sizes="(max-width: 1100px) 86vw, 58vw"
                        className="school-image"
                      />
                    ) : (
                      <FeaturedPlaceholder {...featuredMedia.honorable} />
                    )}
                  </div>
                  <span className="frame-caption">FPT · KHOÁ 2022—2026</span>
                </div>
                <div className="medal-seal" aria-hidden="true">
                  <span>FPT</span>
                </div>
              </motion.div>
            </div>
          </SectionReveal>
        </section>

        <section className="then-now-section" id="truoc-sau" aria-labelledby="then-now-title">
          <SectionReveal className="then-now-inner">
            <div className="section-index section-index-dark">
              <span>01</span>
              <span>Một tình bạn · Hai thời điểm</span>
            </div>
            <header className="then-now-heading">
              <p className="mini-label">2022 — 2026</p>
              <h2 id="then-now-title">Trước sau<br /><em>như một.</em></h2>
              <p>Từ những ngày rất đỗi bình thường đến khoảnh khắc khoác áo tốt nghiệp — vẫn là chúng mình.</p>
            </header>
            <div className="then-now-gallery">
              <motion.figure
                className="then-now-card then-now-card-before"
                initial={{ opacity: 0, y: 36, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={revealTransition}
              >
                <div className="then-now-image then-now-image-square">
                  <Image src="/photos/story/before.png" alt="Nhóm bạn trong những ngày còn học tại FPT University" fill unoptimized sizes="(max-width: 760px) 88vw, 44vw" />
                </div>
                <figcaption><span>Trước</span><p>Những ngày còn rất đỗi bình thường.</p></figcaption>
              </motion.figure>
              <span className="then-now-connector" aria-hidden="true">vẫn là chúng mình</span>
              <motion.figure
                className="then-now-card then-now-card-after"
                initial={{ opacity: 0, y: 54, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.12, ...revealTransition }}
              >
                <div className="then-now-image then-now-image-portrait">
                  <Image src="/photos/story/after.jpg" alt="Khoảnh khắc trong hành trình tốt nghiệp FPT University" fill unoptimized sizes="(max-width: 760px) 82vw, 34vw" />
                </div>
                <figcaption><span>Sau</span><p>Ngày chúng mình đi đến lễ tốt nghiệp.</p></figcaption>
              </motion.figure>
            </div>
          </SectionReveal>
        </section>

        <section className="companions-section" id="ban-be" aria-labelledby="companions-title">
          <SectionReveal className="companions-inner">
            <div className="section-index section-index-light">
              <span>02</span>
              <span>Những người đi cùng</span>
            </div>
            <header className="companions-heading">
              <h2 id="companions-title">Có bạn<br /><em>có chuyện.</em></h2>
              <p>
                Không cần lúc nào cũng nói chuyện lớn lao. Cùng học, cùng chơi
                và có mặt trong những ngày bình thường là đủ.
              </p>
            </header>
            <div className="companions-gallery">
              <motion.figure
                className="companion-card companion-card-main"
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={revealTransition}
              >
                <div className="companion-image companion-image-portrait">
                  <Image src="/photos/companions/everyday.jpg" alt="Những người bạn đồng hành trong quãng thời gian đại học" fill unoptimized sizes="(max-width: 760px) 88vw, 48vw" />
                </div>
                <figcaption><span>01</span><p>Ngày thường.</p></figcaption>
              </motion.figure>

              <div className="companion-side">
                <motion.figure
                  className="companion-card"
                  initial={{ opacity: 0, x: 34 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1, ...revealTransition }}
                >
                  <div className="companion-image companion-image-square">
                    <Image src="/photos/companions/game-night.png" alt="Nhóm bạn cùng nhau chơi game ngoài giờ học" fill unoptimized sizes="(max-width: 760px) 82vw, 34vw" />
                  </div>
                  <figcaption><span>02</span><p>Hẹn nhau ngoài giờ học.</p></figcaption>
                </motion.figure>

                <motion.figure
                  className="companion-card companion-card-last"
                  initial={{ opacity: 0, x: 34 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.18, ...revealTransition }}
                >
                  <div className="companion-image companion-image-square">
                    <Image src="/photos/companions/mirror.png" alt="Nhóm bạn chụp ảnh cùng nhau trước gương" fill unoptimized sizes="(max-width: 760px) 82vw, 34vw" />
                  </div>
                  <figcaption><span>03</span><p>Một lần đủ mặt.</p></figcaption>
                </motion.figure>
              </div>
            </div>

            <motion.figure
              className="competition-story"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={revealTransition}
            >
              <figcaption className="competition-copy">
                <p className="mini-label">Một lần cùng làm</p>
                <h3>Kết quả<br /><em>ngoài dự tính.</em></h3>
                <p>
                  Bắt đầu với mục tiêu thử sức, kết thúc bằng một kết quả vượt xa
                  điều cả nhóm chờ đợi. Mỗi người góp một phần và cùng theo đến cuối.
                </p>
              </figcaption>
              <div className="competition-image">
                <Image
                  src="/photos/companions/competition.jpg"
                  alt="Cả nhóm cùng tham gia một cuộc thi và đạt kết quả ngoài mong đợi"
                  fill
                  unoptimized
                  sizes="(max-width: 760px) 88vw, 40vw"
                />
                <span>Team effort · 2022—2026</span>
              </div>
            </motion.figure>
          </SectionReveal>
        </section>

        <section className="parents-section" id="bo-me" aria-labelledby="parents-title">
          <SectionReveal className="parents-inner">
            <div className="section-index section-index-dark">
              <span>03</span>
              <span>Gia đình · Nơi con bắt đầu</span>
            </div>
            <header className="parents-heading">
              <div>
                <p className="mini-label">Gửi bố mẹ</p>
                <h2 id="parents-title">Con đi đến hôm nay<br /><em>nhờ có bố mẹ.</em></h2>
              </div>
              <p>
                Cảm ơn bố mẹ đã sinh ra con, nuôi con lớn và luôn để con có
                một nơi bình yên để trở về.
              </p>
            </header>

            <div className="parents-gallery">
              <motion.figure
                className="parents-card parents-card-father"
                initial={{ opacity: 0, y: 42, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={revealTransition}
              >
                <div className="parents-image parents-image-father">
                  <Image
                    src="/photos/family/father-and-son.jpg"
                    alt="Võ Lê Trường Huy thuở nhỏ bên bố"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 90vw, 42vw"
                  />
                </div>
                <figcaption>Bố và con · 2008</figcaption>
              </motion.figure>

              <motion.figure
                className="parents-card parents-card-childhood"
                initial={{ opacity: 0, y: 58 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1, ...revealTransition }}
              >
                <div className="parents-image parents-image-childhood">
                  <Image
                    src="/photos/family/childhood.png"
                    alt="Võ Lê Trường Huy trong một bức ảnh tuổi thơ"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 72vw, 24vw"
                  />
                </div>
                <figcaption>Những năm tháng đầu tiên</figcaption>
              </motion.figure>

              <motion.figure
                className="parents-card parents-card-mother"
                initial={{ opacity: 0, y: 46, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.18, ...revealTransition }}
              >
                <div className="parents-image parents-image-mother">
                  <Image
                    src="/photos/family/mother-and-son.png"
                    alt="Võ Lê Trường Huy chụp ảnh cùng mẹ"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 84vw, 30vw"
                  />
                </div>
                <figcaption>Mẹ và con · Hôm nay</figcaption>
              </motion.figure>
            </div>

            <blockquote className="parents-message">
              Một tấm bằng không thể kể hết những năm tháng bố mẹ đã lo cho con.
              Ngày con tốt nghiệp cũng là một cột mốc của bố mẹ.
            </blockquote>
          </SectionReveal>
        </section>

        <section className="tribute-section" id="cam-on-em" aria-labelledby="tribute-title">
          <SectionReveal className="tribute-inner">
            <div className="section-index section-index-dark">
              <span>04</span>
              <span>Một lời dành riêng</span>
            </div>
            <div className="tribute-layout">
              <div className="tribute-copy">
                <p className="mini-label">Cảm ơn em</p>
                <h2 id="tribute-title">Vì đã<br /><em>ở đây.</em></h2>
                <p>
                  Cảm ơn em vì đã ở bên trong những ngày bận rộn, lắng nghe cả
                  những câu chuyện không đầu không cuối và luôn tin anh sẽ làm được.
                </p>
                <blockquote>
                  Tấm bằng này là phần anh hoàn thành; niềm vui trên đường đi thì
                  có một phần rất lớn của em.
                </blockquote>
              </div>
              <motion.figure
                className="tribute-photo"
                initial={{ opacity: 0, x: 42, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={revealTransition}
              >
                <div className="tribute-image">
                  <Image
                    src="/photos/tribute/together.jpg"
                    alt="Khoảnh khắc cùng người luôn đồng hành trong chặng đường đại học"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 86vw, 42vw"
                  />
                </div>
                <figcaption>Ở những ngày bình thường và cả ngày đặc biệt.</figcaption>
              </motion.figure>
            </div>
          </SectionReveal>
        </section>

        <section className="graduated-section" id="tot-nghiep" aria-labelledby="graduated-title">
          <SectionReveal className="graduated-inner">
            <div className="section-index section-index-dark">
              <span>05</span>
              <span>FPT University · 2022—2026</span>
            </div>
            <header className="graduated-heading">
              <h2 id="graduated-title">Tốt nghiệp<br /><em>rồi.</em></h2>
              <p>
                Không vòng vo: đã hoàn thành chương trình, đã nhận chứng nhận
                và đã có bộ ảnh để khoe cho đáng.
              </p>
            </header>
            <div className="graduated-gallery">
              <motion.figure
                className="graduated-card graduated-card-left"
                initial={{ opacity: 0, y: 44, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={revealTransition}
              >
                <BinocularGraduationPhoto />
                <figcaption><span>01</span><p>Lễ phục: có.</p></figcaption>
              </motion.figure>

              <motion.figure
                className="graduated-card graduated-card-main"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.08, ...revealTransition }}
              >
                <div className="graduated-image">
                  <Image src="/photos/graduated/certificate.jpg" alt="Võ Lê Trường Huy cầm chứng nhận tốt nghiệp FPT University" fill unoptimized sizes="(max-width: 760px) 84vw, 34vw" />
                </div>
                <figcaption><span>02</span><p>Chứng nhận: có.</p></figcaption>
              </motion.figure>

              <motion.figure
                className="graduated-card graduated-card-right"
                initial={{ opacity: 0, y: 54, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.16, ...revealTransition }}
              >
                <div className="graduated-image">
                  <Image src="/photos/graduated/portrait.jpg" alt="Chân dung Võ Lê Trường Huy cùng bìa tốt nghiệp" fill unoptimized sizes="(max-width: 760px) 76vw, 27vw" />
                </div>
                <figcaption><span>03</span><p>Ảnh để khoe: cũng có.</p></figcaption>
              </motion.figure>
            </div>
            <p className="graduated-statement">Chính thức hoàn thành chặng đại học tại FPT University.</p>
          </SectionReveal>
        </section>

        <section className="ceremony-section" id="buoi-le" aria-labelledby="ceremony-title">
          <SectionReveal>
            <div className="section-index section-index-orange">
              <span>06</span>
              <span>Lời mời chính thức</span>
            </div>
            <div className="ceremony-heading">
              <div>
                <p className="mini-label mini-label-light">Save the date</p>
                <h2 id="ceremony-title">Hẹn bạn<br />ở ngày<br /><em>trưởng thành.</em></h2>
              </div>
              <p>
                Sự hiện diện của bạn sẽ làm cho cột mốc này trở nên trọn vẹn
                hơn. Cùng đếm ngược nhé.
              </p>
            </div>
            <Countdown />
            <div className="ceremony-details">
              <article>
                <CalendarDays size={21} strokeWidth={1.5} />
                <span>Ngày & giờ</span>
                <strong>{invitationDetails.dateLabel}</strong>
              </article>
              <article>
                <MapPin size={21} strokeWidth={1.5} />
                <span>Địa điểm</span>
                <strong>{invitationDetails.venue}</strong>
                <small>{invitationDetails.address}</small>
              </article>
            </div>
            <figure className="ceremony-program">
              <figcaption className="ceremony-program-copy">
                <p className="mini-label">FPT University · 2022—2026</p>
                <h3>Chương trình<br />ngày tốt nghiệp.</h3>
                <p>
                  Lịch trình chính thức dành cho lễ tốt nghiệp của Võ Lê Trường Huy,
                  từ lúc check-in đến nghi thức tung mũ.
                </p>
                <span>Nhóm 1 · STT 354</span>
              </figcaption>
              <div className="ceremony-program-visual">
                <Image
                  src="/event/fpt-graduation-2026.png"
                  alt="Lịch trình lễ tốt nghiệp FPT 2026 của Võ Lê Trường Huy"
                  width={1004}
                  height={1771}
                  unoptimized
                  sizes="(max-width: 760px) 88vw, 42vw"
                />
              </div>
            </figure>
          </SectionReveal>
        </section>

        <section className="rsvp-section" id="loi-nhan" aria-labelledby="rsvp-title">
          <SectionReveal className="rsvp-grid">
            <div className="rsvp-copy">
              <span className="rsvp-ticket-number">NOTE 01</span>
              <p className="mini-label">Gửi Huy vài lời</p>
              <h2 id="rsvp-title">Để lại một<br />lời nhắn.</h2>
              <p>
                Nếu bạn có điều gì muốn nhắn gửi trong ngày tốt nghiệp, hãy viết
                lại ở đây. Mỗi lời chúc đều là một kỷ niệm đáng giữ.
              </p>
              <div className="rsvp-note">
                <Sparkles size={18} />
                <span>Cảm ơn bạn đã dành thời gian viết vài dòng.</span>
              </div>
            </div>

            <div className="message-link-card">
              <div className="form-stamp" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
              <p className="mini-label">Google Forms</p>
              <h3>Viết đôi điều<br />cho Huy.</h3>
              <p>
                Biểu mẫu chỉ gồm vài câu ngắn. Lời nhắn của bạn sẽ được lưu lại
                để Huy có thể đọc sau ngày tốt nghiệp.
              </p>
              <a
                className="rsvp-submit"
                href="https://forms.gle/aZPfcfrwyWjEbG2m8"
                target="_blank"
                rel="noreferrer"
              >
                Mở form gửi lời nhắn
                <ArrowUpRight size={17} />
              </a>
              <small>Mở trong một tab mới · Google Forms</small>
            </div>
          </SectionReveal>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          {featuredMedia.outro.src ? (
            <Image
              src={featuredMedia.outro.src}
              alt="Nhóm bạn cùng rời cổng trường trong ánh nắng cuối ngày"
              fill
              unoptimized
              sizes="100vw"
              className="closing-image"
            />
          ) : (
            <div className="closing-placeholder">
              <FeaturedPlaceholder {...featuredMedia.outro} />
            </div>
          )}
          <div className="closing-overlay" aria-hidden="true" />
          <SectionReveal className="closing-content">
            <p className="mini-label mini-label-light">Một lời cảm ơn</p>
            <h2 id="closing-title">
              <span>Hẹn gặp lại</span>
              <em>ở chương sau.</em>
            </h2>
            <p>{invitationDetails.closingMessage}</p>
            <div className="closing-signature">
              <span>With love · {invitationDetails.graduateName}</span>
            </div>
          </SectionReveal>
          <div className="confetti" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, index) => (
              <motion.i
                key={index}
                style={{
                  left: `${4 + ((index * 37) % 92)}%`,
                  backgroundColor: index % 3 === 0 ? '#f97316' : index % 3 === 1 ? '#f2efe7' : '#a7b6a8',
                }}
                initial={{ y: 40, opacity: 0, rotate: 0 }}
                whileInView={{ y: -180 - (index % 5) * 30, opacity: [0, 1, 0], rotate: 120 + index * 11 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4 + (index % 4) * 0.25, delay: (index % 8) * 0.08 }}
              />
            ))}
          </div>
        </section>
      </main>

    </MotionConfig>
  );
}
