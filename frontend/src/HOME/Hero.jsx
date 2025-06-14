export default function Hero() {
    return (
        <div style={{
            height: '100vh',
            width: '100%',
            backgroundImage: 'url("/Photo1.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Dark Glass Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(6px)',
                zIndex: 1,
            }} />

            {/* Content */}
            <div style={{
                zIndex: 2,
                textAlign: 'center',
                padding: '20px',
                maxWidth: '800px',
                animation: 'fadeIn 1s ease-out',
            }}>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '900',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                }}>
                    MFIT <span style={{ color: '#FF4C29' }}>Fitness Center</span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.8',
                    marginBottom: '35px',
                    color: 'rgba(255,255,255,0.9)',
                }}>
                    Your ultimate fitness destination — top-tier equipment, expert trainers, relaxing sauna, in-house coffee bar, and unbeatable value.
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
                }}>
                    <button style={{
                        backgroundColor: '#FF4C29',
                        color: '#fff',
                        padding: '14px 32px',
                        border: 'none',
                        borderRadius: '30px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                        Contact Us
                    </button>
                    <button style={{
                        backgroundColor: '#fff',
                        color: '#111',
                        padding: '14px 32px',
                        border: 'none',
                        borderRadius: '30px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                        Read More
                    </button>
                </div>
            </div>

            {/* Keyframe animation */}
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    );
}
