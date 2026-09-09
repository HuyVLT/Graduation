'use client';

import Image from 'next/image';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Check,
  Clock3,
  GraduationCap,
  ImageIcon,
  LockKeyhole,
  MapPin,
  Maximize2,
  Shirt,
  Sparkles,
  Users,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import type React from 'react';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster, toast } from '@/components/ui/toast';
import {
  invitationDetails,
  featuredMedia,
  milestones,
  photos,
  type MemoryPhoto,
} from '@/data/photos';

const revealTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

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

function MemoryVisual({ photo, large = false }: { photo: MemoryPhoto; large?: boolean }) {
  if (photo.src) {
    return (
      <Image
        src={photo.src}
        alt={photo.caption}
        fill
        sizes={large ? '(max-width: 700px) 92vw, 760px' : '(max-width: 600px) 46vw, 20vw'}
        className="memory-image"
      />
    );
  }

  return (
    <div className={`memory-placeholder memory-placeholder-${photo.accent}`}>
      <div className="placeholder-frame" aria-hidden="true">
        <span className="placeholder-sun" />
        <span className="placeholder-horizon" />
      </div>
      <div className="placeholder-copy">
        <ImageIcon size={large ? 26 : 17} strokeWidth={1.5} aria-hidden="true" />
        <span>Ảnh của bạn</span>
        <small>{photo.fileHint.replace('/photos/', '')}</small>
      </div>
    </div>
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

function Locker({
  photo,
  isOpen,
  onOpen,
  onClose,
  onPreview,
}: {
  photo: MemoryPhoto;
  isOpen: boolean;
  onOpen: (withSound?: boolean) => void;
  onClose: () => void;
  onPreview: () => void;
}) {
  return (
    <article
      className={`locker-card ${isOpen ? 'is-open' : ''}`}
      data-locker-id={photo.id}
      onMouseEnter={() => onOpen(false)}
      onMouseLeave={onClose}
    >
      <div className="locker-interior">
        <div className="locker-photo-wrap">
          <MemoryVisual photo={photo} />
        </div>
        <div className="locker-caption">
          <span>{photo.date}</span>
          <p>{photo.caption}</p>
        </div>
        <button
          type="button"
          className="locker-preview-button"
          onClick={onPreview}
          aria-label={`Phóng to ảnh: ${photo.caption}`}
        >
          <Maximize2 size={15} />
          Xem ảnh
        </button>
        <button
          type="button"
          className="locker-close-button"
          onClick={onClose}
          aria-label={`Đóng locker ${photo.lockerNumber}`}
        >
          <X size={15} />
        </button>
      </div>

      <motion.button
        type="button"
        className="locker-door"
        onClick={() => onOpen(true)}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Đóng' : 'Mở'} locker ${photo.lockerNumber}: ${photo.caption}`}
        style={{
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
          pointerEvents: isOpen ? 'none' : 'auto',
        }}
        animate={
          { rotateY: isOpen ? -108 : 0 }
        }
        transition={{ type: 'spring', stiffness: 110, damping: 18, mass: 0.9 }}
      >
        <span className="locker-label">LQĐ — {photo.lockerNumber}</span>
        <span className="door-vents" aria-hidden="true" />
        <span className="door-number">{photo.lockerNumber.slice(-2)}</span>
        <span className="door-handle" aria-hidden="true">
          <LockKeyhole size={16} strokeWidth={1.6} />
        </span>
        <span className="door-note">Chạm để mở</span>
      </motion.button>
    </article>
  );
}

export function InvitationExperience() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(false);
  const [openLocker, setOpenLocker] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  useEffect(() => {
    if (!openLocker) return;

    const closeOnOutside = (event: PointerEvent) => {
      const target = event.target as Element;
      if (
        target.closest(`[data-locker-id="${openLocker}"]`) ||
        target.closest('[data-slot="dialog-content"]')
      ) {
        return;
      }
      setOpenLocker(null);
    };

    document.addEventListener('pointerdown', closeOnOutside);
    return () => document.removeEventListener('pointerdown', closeOnOutside);
  }, [openLocker]);

  const playUnlock = () => {
    if (muted) return;
    const AudioContextClass = window.AudioContext;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(760, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(180, context.currentTime + 0.08);
    gain.gain.setValueAtTime(0.035, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.1);
    oscillator.addEventListener('ended', () => void context.close());
  };

  const openMemory = (photoId: string, withSound = false) => {
    setOpenLocker((current) => {
      if (current === photoId) return null;
      if (withSound) playUnlock();
      return photoId;
    });
  };

  const jumpToMilestone = (id: string) => {
    document.getElementById(`group-${id}`)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const submitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    toast.add({
      title: 'Đã ghi nhận lời hồi đáp',
      description: 'Cảm ơn bạn! Hẹn gặp nhau trong ngày tốt nghiệp.',
      type: 'success',
    });
    form.reset();
  };

  return (
    <MotionConfig reducedMotion="user">
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
                alt="Học sinh ngồi bên bàn học trong lớp vào buổi chiều"
                fill
                priority
                sizes="100vw"
                className="hero-image"
              />
            ) : (
              <FeaturedPlaceholder {...featuredMedia.hero} />
            )}
          </motion.div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />

          <nav className="site-nav" aria-label="Điều hướng chính">
            <a href="#top" className="brand-chip">
              KHOÁ 2026
            </a>
            <div className="nav-links">
              <a href="#ky-uc">Kỷ niệm</a>
              <a href="#buoi-le">Buổi lễ</a>
              <a href="#rsvp">RSVP</a>
            </div>
          </nav>

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
              Chào mừng đến hành trình 12 năm của{' '}
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
            <p>THPT LÊ QUÝ ĐÔN · NIÊN KHOÁ 2023–2026</p>
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
                <p className="mini-label">Nơi tất cả bắt đầu</p>
                <h2 id="honorable-title">THPT<br />Lê Quý Đôn</h2>
                <p className="honorable-text">
                  Cảm ơn mái trường đã cho những buổi sáng vội vàng, những
                  chiều nán lại và một thời thanh xuân không thể lặp lại.
                </p>
                <div className="school-signature">
                  <GraduationCap size={24} strokeWidth={1.4} />
                  <span>Ba năm · Một mái nhà</span>
                </div>
              </div>
              <motion.div
                className="honorable-art"
                initial={{ opacity: 0, x: 44, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: -1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.15, ...revealTransition }}
              >
                <div className="medal-ribbon" aria-hidden="true" />
                <div className="school-photo-frame">
                  <div className="school-photo">
                    {featuredMedia.honorable.src ? (
                      <Image
                        src={featuredMedia.honorable.src}
                        alt="Sân trường THPT Lê Quý Đôn"
                        fill
                        sizes="(max-width: 760px) 88vw, 50vw"
                        className="school-image"
                      />
                    ) : (
                      <FeaturedPlaceholder {...featuredMedia.honorable} />
                    )}
                  </div>
                  <span className="frame-caption">LQĐ · KHOÁ 2026</span>
                </div>
                <div className="medal-seal" aria-hidden="true">
                  <span>LQĐ</span>
                </div>
              </motion.div>
            </div>
          </SectionReveal>
        </section>

        <section className="locker-section" id="ky-uc" aria-labelledby="locker-title">
          <SectionReveal className="locker-intro">
            <div className="section-index section-index-light">
              <span>01</span>
              <span>Ký ức được cất giữ</span>
            </div>
            <div className="locker-heading-grid">
              <h2 id="locker-title">Chọn một<br />cánh cửa.</h2>
              <div>
                <p>
                  Mười tám ngăn tủ, mười tám mảnh ghép. Chạm vào ổ khoá để
                  nhìn lại những điều đã làm nên thời học sinh.
                </p>
                <span className="interaction-hint">
                  <LockKeyhole size={15} /> Hover hoặc chạm để mở
                </span>
              </div>
            </div>
          </SectionReveal>

          <div className="milestone-nav" aria-label="Đi đến cột mốc">
            {milestones.map((milestone) => (
              <button
                type="button"
                key={milestone.id}
                onClick={() => jumpToMilestone(milestone.id)}
              >
                <span>{milestone.label}</span>
                <small>{milestone.note}</small>
              </button>
            ))}
          </div>

          <div className="locker-groups">
            {milestones.map((milestone, milestoneIndex) => {
              const group = photos.filter((photo) => photo.milestone === milestone.id);
              return (
                <SectionReveal
                  className="locker-group"
                  key={milestone.id}
                >
                  <div className="group-heading" id={`group-${milestone.id}`}>
                    <span>{String(milestoneIndex + 1).padStart(2, '0')}</span>
                    <h3>{milestone.label}</h3>
                    <p>{milestone.note}</p>
                  </div>
                  <div className={`locker-grid locker-grid-${group.length}`}>
                    {group.map((photo) => (
                      <Locker
                        key={photo.id}
                        photo={photo}
                        isOpen={openLocker === photo.id}
                        onOpen={(withSound) => openMemory(photo.id, withSound)}
                        onClose={() => setOpenLocker(null)}
                        onPreview={() => setSelectedPhoto(photo)}
                      />
                    ))}
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </section>

        <section className="ceremony-section" id="buoi-le" aria-labelledby="ceremony-title">
          <SectionReveal>
            <div className="section-index section-index-orange">
              <span>02</span>
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
              <article>
                <Shirt size={21} strokeWidth={1.5} />
                <span>Trang phục</span>
                <strong>{invitationDetails.dressCode}</strong>
              </article>
            </div>
          </SectionReveal>
        </section>

        <section className="rsvp-section" id="rsvp" aria-labelledby="rsvp-title">
          <SectionReveal className="rsvp-grid">
            <div className="rsvp-copy">
              <span className="rsvp-ticket-number">ADMIT 01</span>
              <p className="mini-label">Bạn sẽ đến chứ?</p>
              <h2 id="rsvp-title">Gửi một lời<br />hồi đáp.</h2>
              <p>
                Form này đang ghi nhận trên thiết bị để bạn xem trước trải
                nghiệm. Có thể nối Google Sheets hoặc Formspree khi bạn sẵn sàng.
              </p>
              <div className="rsvp-note">
                <Users size={18} />
                <span>Vui lòng phản hồi trước ngày bạn chọn.</span>
              </div>
            </div>

            <form className="rsvp-form" onSubmit={submitRsvp}>
              <div className="form-stamp" aria-hidden="true">
                <Check size={18} />
              </div>
              <Field>
                <FieldLabel htmlFor="guest-name">Tên của bạn</FieldLabel>
                <Input
                  id="guest-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Nhập họ và tên"
                  className="invitation-input"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="guest-count">Số người tham dự</FieldLabel>
                <Input
                  id="guest-count"
                  name="count"
                  required
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="invitation-input"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="guest-note">Ghi chú</FieldLabel>
                <Textarea
                  id="guest-note"
                  name="note"
                  placeholder="Để lại lời nhắn nếu bạn muốn..."
                  className="invitation-textarea"
                />
              </Field>
              <Button type="submit" className="rsvp-submit" size="lg">
                Gửi lời hồi đáp
                <ArrowUpRight size={17} />
              </Button>
            </form>
          </SectionReveal>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          {featuredMedia.outro.src ? (
            <Image
              src={featuredMedia.outro.src}
              alt="Nhóm bạn cùng rời cổng trường trong ánh nắng cuối ngày"
              fill
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
            <h2 id="closing-title">Hẹn gặp lại<br /><em>ở chương sau.</em></h2>
            <p>{invitationDetails.closingMessage}</p>
            <div className="closing-signature">
              <Sparkles size={19} />
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

      <button
        className="sound-toggle"
        type="button"
        onClick={() => setMuted((value) => !value)}
        aria-label={muted ? 'Bật âm thanh' : 'Tắt âm thanh'}
        aria-pressed={muted}
      >
        {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        <span>{muted ? 'Bật tiếng' : 'Âm thanh'}</span>
      </button>

      <AnimatePresence>
        {selectedPhoto && (
          <Dialog
            open
            onOpenChange={(open) => {
              if (!open) setSelectedPhoto(null);
            }}
          >
            <DialogContent className="memory-dialog" showCloseButton>
              <DialogHeader className="memory-dialog-header">
                <DialogTitle>{selectedPhoto.caption}</DialogTitle>
                <DialogDescription>{selectedPhoto.date}</DialogDescription>
              </DialogHeader>
              <div className="memory-dialog-visual">
                <MemoryVisual photo={selectedPhoto} large />
              </div>
              <div className="memory-dialog-footer">
                <Camera size={16} />
                <span>{selectedPhoto.fileHint}</span>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <Toaster timeout={4200} />
    </MotionConfig>
  );
}
