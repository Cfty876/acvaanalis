import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Shield, Map } from 'lucide-react';

export default function Landing() {
    // Bubbles effect
    useEffect(() => {
        const bubblesContainer = document.getElementById('bubbles');
        if (bubblesContainer) {
            for (let i = 0; i < 20; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                const size = Math.random() * 60 + 10;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
                bubble.style.animationDelay = `${Math.random() * 5}s`;
                bubblesContainer.appendChild(bubble);
            }
        }
        return () => {
            if (bubblesContainer) bubblesContainer.innerHTML = '';
        };
    }, []);

    return (
        <div className="landing-page" style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <div id="bubbles" className="bubbles"></div>

            {/* Overlay to ensure readability */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(1, 10, 21, 0.7)',
                zIndex: 1
            }}></div>

            <nav style={{
                position: 'relative',
                zIndex: 10,
                padding: '24px 48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Droplets size={32} color="var(--color-teal)" />
                    <div>
                        <h1 style={{ fontSize: '1.9rem', letterSpacing: '2px', color: '#fff' }}>АкваАнализ</h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                            Официальная система мониторинга качества воды
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Link to="/login" className="btn-secondary">Вход в систему</Link>
                    <Link to="/register" className="btn-primary">Запрос доступа</Link>
                </div>
            </nav>

            <main style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '80px 24px',
                textAlign: 'center'
            }}>
                <div className="glass-panel" style={{
                    padding: '60px',
                    maxWidth: '800px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '3.2rem', marginBottom: '20px', color: '#fff' }}>
                            Рабочий кабинет мониторинга водных экосистем
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', marginBottom: '24px', lineHeight: '1.6' }}>
                            Сервис для сотрудников заповедников и особо охраняемых природных территорий России.
                            Здесь вы планируете маршруты, фиксируете водные объекты и получаете сводки по состоянию воды.
                        </p>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
                            Доступ к системе предоставляется администрацией заповедника. Для входа используйте
                            служебный аккаунт и ключ платформы.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/login" className="btn-primary" style={{ fontSize: '1.05rem', padding: '14px 30px' }}>
                                Войти в систему <ArrowRight size={20} />
                            </Link>
                            <Link to="/register" className="btn-secondary" style={{ fontSize: '0.95rem', padding: '12px 26px' }}>
                                Запросить новый доступ
                            </Link>
                        </div>
                    </div>
                </div>

                <section style={{
                    display: 'flex',
                    gap: '30px',
                    marginTop: '80px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div className="glass-card" style={{ padding: '30px', width: '300px', textAlign: 'left' }}>
                        <Shield size={40} color="var(--color-teal)" style={{ marginBottom: '20px' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Защищённый доступ</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Персональные учётные записи сотрудников и ключ платформы обеспечивают контроль доступа
                            и безопасность данных мониторинга.
                        </p>
                    </div>
                    <div className="glass-card" style={{ padding: '30px', width: '300px', textAlign: 'left' }}>
                        <Map size={40} color="var(--color-teal)" style={{ marginBottom: '20px' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Картирование водных объектов</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Наносите заповедные территории и водные объекты на карту, планируйте маршруты отбора проб
                            и фиксируйте зоны наблюдения.
                        </p>
                    </div>
                    <div className="glass-card" style={{ padding: '30px', width: '300px', textAlign: 'left' }}>
                        <Droplets size={40} color="var(--color-teal)" style={{ marginBottom: '20px' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Аналитика качества воды</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Отслеживайте динамику показателей воды и формируйте отчёты для внутренних служб и
                            надзорных органов.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
