/**
 * KAMIDATANG — Supabase Backend Configuration & Multi-Tenant Subdomain SDK Adapter
 * Mendukung kamidatang.com, delta.kamidatang.com, desh.kamidatang.com, dst.
 */

// Konfigurasi Kredensial Supabase
const SUPABASE_CONFIG = {
    DEFAULT_URL: "https://keknkdykvsgqkzxuyjqt.supabase.co",
    DEFAULT_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtla25rZHlrdnNncWt6eHV5anF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5MTc1MzcsImV4cCI6MjEwNjQ5MzUzN30.mfU91i-YhF3eRxm1oTKoyV4TDEUCkUoURqEpBnlYw2w",
    STORAGE_URL_KEY: "kamidatang_supabase_url",
    STORAGE_ANON_KEY: "kamidatang_supabase_key",
    STORAGE_CACHE_KEY: "kamidatang_cms_articles_v2",
    STORAGE_SITES_KEY: "kamidatang_cms_sites",
    STORAGE_ACTIVE_SITE_KEY: "kamidatang_active_studio_site",
    STORAGE_ADSENSE_KEY: "kamidatang_adsense_config"
};

// Data Cadangan Subdomain Portal (Fallback)
const KAMIDATANG_DEFAULT_SITES = [
    {
        id: 1,
        slug: "main",
        name: "KAMIDATANG",
        tagline: "Cepat, Jernih & Terpercaya",
        description: "Portal Berita & Artikel Nasional Utama",
        logoBadge: "KD",
        themeColor: "#2563eb", // blue-600
        domain: "kamidatang.com"
    },
    {
        id: 2,
        slug: "delta",
        name: "KAMIDATANG Delta",
        tagline: "Aktual, Berani & Independen",
        description: "Portal Berita & Warta Wilayah Delta",
        logoBadge: "KD",
        themeColor: "#0284c7", // sky-600
        domain: "delta.kamidatang.com"
    },
    {
        id: 3,
        slug: "desh",
        name: "KAMIDATANG Desh",
        tagline: "Inspirasi & Gagasan Terdepan",
        description: "Portal Liputan Khusus & Feature Desh",
        logoBadge: "KD",
        themeColor: "#4f46e5", // indigo-600
        domain: "desh.kamidatang.com"
    }
];

// Data Cadangan Berita Multi-Subdomain (Fallback & Seed Real Terkini)
const KAMIDATANG_DEFAULT_ARTICLES = [
    {
        id: 1,
        siteSlug: "main",
        status: "Terbit",
        isMainHeadline: true,
        isSubHeadline: false,
        dateline: "JAKARTA, KAMIDATANG",
        title: "Presiden Prabowo Lantik Jenderal Dudung Menko Polkam dan Jenderal Suyudi Kapolri dalam Reshuffle Kabinet Merah Putih",
        summary: "Perombakan pos menteri koordinator dan kepemimpinan institusi kepolisian resmi dilakukan di Istana Negara guna memperkuat stabilitas keamanan nasional dan akselerasi program kerja.",
        category: "Nasional",
        tags: ["Nasional", "Kabinet Merah Putih", "Polri", "Pemerintahan"],
        date: "Jumat, 2 Okt 2026 • 09:15 WIB",
        timeAgo: "25 menit lalu",
        author: "Raka Nusantara",
        views: 8940,
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80",
        caption: "Suasana pelantikan menteri dan pimpinan lembaga di Istana Negara Jakarta. (Foto: Dok. Biro Pers Kepresidenan / KAMIDATANG)",
        content: `<p><strong>JAKARTA, KAMIDATANG</strong> — Presiden Prabowo Subianto secara resmi melantik perombakan sejumlah posisi menteri dan pimpinan institusi penegak hukum dalam Kabinet Merah Putih di Istana Negara, Jakarta.</p><p>Dalam pelantikan tersebut, Jenderal TNI (Purn) Dudung Abdurachman resmi dipercaya menjabat sebagai Menteri Koordinator Bidang Politik dan Keamanan (Menko Polkam). Sementara itu, tongkat komando Kepolisian Republik Indonesia resmi berganti setelah Jenderal Polisi Suyudi Ario Seto dilantik sebagai Kepala Kepolisian Negara Republik Indonesia (Kapolri) menggantikan Jenderal Listyo Sigit Prabowo.</p><h2>Akselerasi Program Prioritas dan Keamanan Terpadu</h2><p>Dalam amanatnya, Presiden menegaskan bahwa tantangan geopolitik dan perlunya penegakan hukum yang transparan menuntut kepemimpinan yang tanggap dan berintegritas tinggi.</p><blockquote>"Kita membutuhkan aparatur keamanan dan pertahanan yang solid, profesional, dan bekerja tanpa kompromi demi melindungi kedaulatan serta ketertiban segenap tumpah darah Indonesia," tegas Presiden di hadapan para menteri kabinet.</blockquote><p>Langkah reshuffle ini disambut positif oleh kalangan parlemen yang berharap sinergi TNI-Polri dan koordinasi stabilitas politik nasional semakin diperkuat menghadapi kuartal akhir tahun 2026.</p>`,
        comments: [
            { name: "Agus Pratama", city: "Jakarta", time: "10 menit lalu", text: "Semoga jajaran menteri dan Kapolri yang baru mampu menjaga stabilitas hukum dan perlindungan masyarakat secara adil." }
        ]
    },
    {
        id: 4,
        siteSlug: "main",
        status: "Terbit",
        isMainHeadline: false,
        isSubHeadline: true,
        dateline: "JAKARTA, KAMIDATANG",
        title: "Adopsi Ekosistem AI Generatif Lokal Melejit di Indonesia, Akselerasi Efisiensi Bisnis dan Layanan Publik 24 Jam",
        summary: "Integrasi kecerdasan buatan berbasis konteks bahasa Indonesia mencatat lonjakan adopsi hingga 140 persen di sektor perbankan, telekomunikasi, dan ratusan ribu unit usaha UMKM.",
        category: "Teknologi",
        tags: ["Teknologi", "AI Generatif", "Transformasi Digital", "Cloud"],
        date: "Jumat, 2 Okt 2026 • 08:45 WIB",
        timeAgo: "1 jam lalu",
        author: "Dimas Prakoso",
        views: 5210,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        caption: "Pusat pengembangan kecerdasan buatan dan otomatisasi data komputasi awan. (Foto: KAMIDATANG / Dok. Tech)",
        content: `<p><strong>JAKARTA, KAMIDATANG</strong> — Pemanfaatan teknologi kecerdasan buatan generatif (Generative AI) yang disesuaikan dengan bahasa dan kebudayaan Indonesia berkembang pesat sepanjang kuartal ketiga dan keempat tahun 2026.</p><p>Berdasarkan data asosiasi teknologi informasi nasional, lebih dari 120.000 badan usaha mulai mengintegrasikan sistem asisten pintar terpadu untuk merespons kebutuhan pelanggan, mengolah data logistik, hingga penyusunan laporan keuangan otomatis.</p><h2>Efisiensi Operasional hingga 60 Persen</h2><p>Penerapan AI lokal ini terbukti memangkas waktu operasional back-office secara signifikan tanpa harus mengorbankan keamanan data perorangan.</p><blockquote>"Solusi kecerdasan buatan masa kini bukan lagi sekadar eksperimen, melainkan tulang punggung daya saing ekonomi digital Indonesia di kancah Asia Tenggara," ungkap pakar analitik digital nasional.</blockquote>`,
        comments: []
    },
    {
        id: 5,
        siteSlug: "main",
        status: "Terbit",
        isMainHeadline: false,
        isSubHeadline: true,
        dateline: "JAKARTA, KAMIDATANG",
        title: "Badan Gizi Nasional Aktivasi 480 Satuan Pelayanan Gizi di 16 Provinsi, Gerakkan Ekonomi Daerah Rp28 Triliun",
        summary: "Pengoperasian 480 Satuan Pelayanan Gizi (SPPG) tahap awal mulai menyerap hasil bumi petani dan peternak lokal, menstimulasi perputaran ekonomi kerakyatan secara masif.",
        category: "Ekonomi",
        tags: ["Ekonomi", "Badan Gizi Nasional", "Ketahanan Pangan", "UMKM"],
        date: "Jumat, 2 Okt 2026 • 08:10 WIB",
        timeAgo: "2 jam lalu",
        author: "Larasati Wijaya",
        views: 6730,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
        caption: "Aktivitas transaksi pasokan pangan dan pemantauan rantai pasok ekonomi kerakyatan. (Foto: KAMIDATANG)",
        content: `<p><strong>JAKARTA, KAMIDATANG</strong> — Badan Gizi Nasional (BGN) resmi memulai aktivasi operasional 480 unit Satuan Pelayanan Gizi (SPPG) yang tersebar di 16 provinsi per awal Oktober 2026. Seluruh satuan pelayanan ini diproyeksikan beroperasi penuh dalam kurun waktu 3 hingga 4 pekan ke depan.</p><p>Langkah ini tidak hanya berfokus pada pemenuhan nutrisi generasi muda, tetapi juga menjadi instrumen pengungkit ekonomi daerah lewat penyerapan komoditas lokal seperti beras, sayur mayur, telur, dan daging dari koperasi petani terdekat.</p><h2>Multiplier Effect untuk Petani dan Peternak Lokal</h2><p>Kementerian Koordinator Bidang Perekonomian mengestimasi sirkulasi dana tunai langsung di tingkat pedesaan dan sentra pertanian mencapai lebih dari Rp28 triliun pada tahun pertama.</p><blockquote>"Model rantai pasok tertutup yang memprioritaskan petani rakyat memastikan perputaran uang tetap berada di daerah dan memicu pertumbuhan ekonomi berbasis komunitas," jelas juru bicara ketahanan pangan nasional.</blockquote>`,
        comments: []
    },
    {
        id: 6,
        siteSlug: "main",
        status: "Terbit",
        isMainHeadline: false,
        isSubHeadline: false,
        dateline: "NAGOYA, KAMIDATANG",
        title: "Bangga Indonesia! Nurisa Dian Ashrifah Raih Medali Emas Panahan Compound Putri Asian Games Aichi-Nagoya",
        summary: "Pemanah andalan Merah Putih Nurisa Dian Ashrifah tampil perkasa menundukkan wakil Filipina di partai final nomor compound individu putri, mendongkrak posisi Indonesia di klasemen medali.",
        category: "Olahraga",
        tags: ["Olahraga", "Asian Games", "Panahan", "Indonesia Juara"],
        date: "Jumat, 2 Okt 2026 • 07:30 WIB",
        timeAgo: "3 jam lalu",
        author: "Fajar Nugroho",
        views: 4420,
        image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
        caption: "Konsentrasi atlet panahan Indonesia saat membidik sasaran dalam laga perebutan medali emas. (Foto: Dok. KONI / KAMIDATANG)",
        content: `<p><strong>NAGOYA, KAMIDATANG</strong> — Lagu kebangsaan Indonesia Raya kembali berkumandang megah di arena panahan Aichi-Nagoya dalam ajang Asian Games 2026. Atlet panahan putri Indonesia, Nurisa Dian Ashrifah, sukses mempersembahkan medali emas di nomor compound perorangan putri.</p><p>Tampil dengan ketenangan luar biasa di bawah tekanan angin kencang, Nurisa sukses mengungguli rival terkuatnya asal Filipina dengan skor tipis 146-144 di babak pamungkas lima seri tembakan.</p><h2>Lonjakan Posisi di Klasemen Sementara</h2><p>Tambahan emas dari cabang panahan ini membawa kontingen Indonesia menempati peringkat ke-13 klasemen perolehan medali dengan total 34 medali, melampaui target awal federasi.</p><blockquote>"Medali emas ini saya persembahkan untuk seluruh rakyat Indonesia yang tiada henti mengirimkan doa dan dukungan. Perjuangan di setiap anak panah adalah untuk kehormatan Merah Putih," ungkap Nurisa sembari berlinang air mata haru.</blockquote>`,
        comments: []
    },
    {
        id: 7,
        siteSlug: "main",
        status: "Terbit",
        isMainHeadline: false,
        isSubHeadline: false,
        dateline: "SOLO, KAMIDATANG",
        title: "Peringatan Hari Batik Nasional 2 Oktober: Wastra Nusantara Tembus Panggung Mode Dunia dan Digandrungi Generasi Muda",
        summary: "Perayaan Hari Batik Nasional 2026 disambut meriah dengan kolaborasi desainer muda mengangkat pewarna alam ramah lingkungan dan potongan kasual modern yang mendominasi tren busana harian.",
        category: "Gaya Hidup",
        tags: ["Gaya Hidup", "Hari Batik Nasional", "Fashion", "Wastra Nusantara"],
        date: "Jumat, 2 Okt 2026 • 07:00 WIB",
        timeAgo: "3 jam lalu",
        author: "Annisa Maharani",
        views: 3880,
        image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
        caption: "Kreasi busana batik kontemporer yang menggabungkan motif tradisional dengan siluet streetwear modern. (Foto: Dok. KAMIDATANG Lifestyle)",
        content: `<p><strong>SOLO, KAMIDATANG</strong> — Peringatan Hari Batik Nasional pada 2 Oktober 2026 dirayakan serentak di berbagai kota di Tanah Air dengan antusiasme yang kian segar. Batik kini tidak lagi dipandang semata sebagai busana formal kenegaraan, melainkan telah menjelma menjadi identitas gaya hidup dinamis anak muda.</p><p>Gelaran parade wastra di Surakarta, Yogyakarta, dan Jakarta menampilkan ratusan kreasi batik cap dan tulis kontemporer yang dipadukan dengan konsep streetwear kasual dan sneakers.</p><h2>Tren Pewarna Alam dan Keberlanjutan</h2><p>Salah satu sorotan terbesar tahun ini adalah adopsi pewarna alami berbasis daun mangga, kulit kayu tingi, dan indigofera yang ramah lingkungan dan bebas limbah kimia.</p><blockquote>"Generasi muda saat ini sangat menghargai nilai filosofis dan aspek keberlanjutan. Memakai batik adalah wujud kebanggaan budaya sekaligus komitmen pelestarian bumi," tutur kurator busana nusantara terkemuka.</blockquote>`,
        comments: []
    },
    {
        id: 8,
        siteSlug: "main",
        status: "Terbit",
        isMainHeadline: false,
        isSubHeadline: false,
        dateline: "JEMBER, KAMIDATANG",
        title: "Kontes Mobil Hemat Energi (KMHE) 2026 Digelar: 64 Kendaraan Inovatif Mahasiswa Unjuk Gigi Capai Rekor 800 Km/Liter",
        summary: "Sebanyak 64 tim perwakilan universitas se-Indonesia bersaing dalam Kontes Mobil Hemat Energi 2026 di Universitas Jember, menghadirkan prototipe aerodinamis bertenaga baterai dan bahan bakar alternatif ramah lingkungan.",
        category: "Otomotif",
        tags: ["Otomotif", "KMHE 2026", "Mobil Listrik", "Inovasi Energi"],
        date: "Jumat, 2 Okt 2026 • 06:45 WIB",
        timeAgo: "4 jam lalu",
        author: "Bambang Irawan",
        views: 4190,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
        caption: "Uji efisiensi aerodinamika prototipe kendaraan listrik karya mahasiswa di lintasan sirkuit uji coba. (Foto: Dok. Panitia KMHE / KAMIDATANG Otomotif)",
        content: `<p><strong>JEMBER, KAMIDATANG</strong> — Universitas Jember, Jawa Timur, resmi menjadi tuan rumah ajang bergengsi Kontes Mobil Hemat Energi (KMHE) 2026. Sebanyak 64 kendaraan prototipe hemat energi rancangan para insinyur muda dari puluhan perguruan tinggi unjuk kebolehan di lintasan uji coba.</p><p>Kompetisi tahun ini membagi dua kategori utama, yakni Prototipe (kendaraan beroda tiga dengan efisiensi aerodinamika maksimal) dan Urban Concept (kendaraan beroda empat berdesain realistis untuk lalu lintas perkotaan).</p><h2>Rekor Efisiensi dan Rekayasa Material Ringan</h2><p>Para kontestan memanfaatkan material komposit serat karbon berkekuatan tinggi serta motor listrik magnet permanen berdensitas efisiensi hingga 94 persen.</p><blockquote>"Beberapa tim prototipe berhasil mencatatkan rekor konsumsi setara lebih dari 800 kilometer per liter ekuivalen energi listrik. Ini membuktikan talenta teknik muda Indonesia sangat siap memimpin era transportasi ramah lingkungan," jelas ketua dewan juri KMHE 2026.</blockquote>`,
        comments: []
    },
    {
        id: 2,
        siteSlug: "delta",
        status: "Terbit",
        isMainHeadline: true,
        isSubHeadline: false,
        dateline: "DELTA, KAMIDATANG",
        title: "[Eksklusif Delta] Modernisasi Kawasan Industri Delta Tarik Investasi Hijau Senilai Rp14 Triliun",
        summary: "Pengembangan koridor industri ramah lingkungan di Delta mulai beroperasi penuh dengan pemanfaatan PLTS atap dan pengelolaan limbah sirkular terpadu.",
        category: "Ekonomi",
        tags: ["Delta", "Investasi", "Industri Hijau"],
        date: "Jumat, 2 Okt 2026 • 09:00 WIB",
        timeAgo: "1 jam lalu",
        author: "Larasati Wijaya",
        views: 3120,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        caption: "Pusat kendali otomatisasi operasional kawasan industri Delta. (Foto: KAMIDATANG Delta)",
        content: `<p><strong>DELTA, KAMIDATANG</strong> — Transformasi kawasan industri terpadu Delta menuju standar net-zero emission membuahkan hasil nyata pada pembukaan kuartal terakhir 2026.</p><p>Sebanyak enam konsorsium manufaktur internasional resmi menandatangani nota kesepahaman komitmen perluasan fasilitas perakitan berteknologi tinggi.</p><h2>Penyediaan Lapangan Kerja Lokal</h2><p>Gubernur daerah setempat menegaskan bahwa prioritas penyerapan tenaga kerja terampil diberikan kepada lulusan politeknik lokal Delta.</p><blockquote>"Kawasan Delta diproyeksikan menjadi episentrum baru manufaktur bersih di Asia Tenggara," ungkap ketua dewan investasi daerah.</blockquote>`,
        comments: []
    },
    {
        id: 3,
        siteSlug: "desh",
        status: "Terbit",
        isMainHeadline: true,
        isSubHeadline: false,
        dateline: "DESH, KAMIDATANG",
        title: "[Sorotan Desh] Komunitas Desain Kreatif Desh Bangun Studio Kolaborasi Terbuka untuk UMKM",
        summary: "Kolektif desainer muda dan pegiat audio-visual Desh meluncurkan program pembinaan identitas merek gratis bagi ratusan pelaku usaha mikro.",
        category: "Teknologi",
        tags: ["Desh", "Ekonomi Kreatif", "Desain"],
        date: "Jumat, 2 Okt 2026 • 08:30 WIB",
        timeAgo: "2 jam lalu",
        author: "Bagas Pratama",
        views: 2890,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        caption: "Aktivitas lokakarya desain merek di studio kolaborasi Desh. (Foto: KAMIDATANG Desh)",
        content: `<p><strong>DESH, KAMIDATANG</strong> — Ruang kolaborasi kreatif di kawasan kota lama Desh resmi diperkenalkan pagi ini sebagai wadah akselerasi karya visual dan produk lokal.</p><p>Inisiatif independen ini menyediakan perangkat studio rekaman, percetakan digital mikro, serta lokakarya kurasi kemasan produk bagi pelaku UMKM tanpa dipungut biaya operasional tinggi.</p>`,
        comments: []
    }
];

class KamiDatangBackend {
    constructor() {
        this.client = null;
        this.initClient();
    }

    // Mendeteksi subdomain aktif saat ini
    getCurrentSubdomain() {
        if (typeof window !== 'undefined' && window.location) {
            // 1. Prioritas utama: Parameter URL (?site=delta atau ?site=desh) untuk testing
            const urlParams = new URLSearchParams(window.location.search);
            const siteParam = urlParams.get('site');
            if (siteParam) return siteParam.toLowerCase().trim();

            const hostname = (window.location.hostname || '').toLowerCase();

            // 2. Domain deployment preview (Vercel, Netlify, Cloudflare Pages, localhost) -> selalu 'main'
            if (
                hostname.endsWith('.vercel.app') || 
                hostname.endsWith('.netlify.app') || 
                hostname.endsWith('.pages.dev') || 
                hostname.endsWith('.github.io') ||
                hostname === 'localhost' || 
                hostname === '127.0.0.1'
            ) {
                return 'main';
            }

            // 3. Domain produksi custom kamidatang.com
            if (hostname.endsWith('kamidatang.com')) {
                const parts = hostname.split('.');
                // Jika formatnya <subdomain>.kamidatang.com (misal: delta.kamidatang.com)
                if (parts.length >= 3) {
                    const sub = parts[0];
                    if (sub !== 'www' && sub !== 'studio') {
                        return sub;
                    }
                }
                return 'main';
            }
        }

        // 4. Fallback default: 'main' (Portal Utama)
        return 'main';
    }

    getCredentials() {
        const url = (localStorage.getItem(SUPABASE_CONFIG.STORAGE_URL_KEY) || SUPABASE_CONFIG.DEFAULT_URL || "").trim();
        const key = (localStorage.getItem(SUPABASE_CONFIG.STORAGE_ANON_KEY) || SUPABASE_CONFIG.DEFAULT_ANON_KEY || "").trim();
        return { url, key };
    }

    setCredentials(url, key) {
        localStorage.setItem(SUPABASE_CONFIG.STORAGE_URL_KEY, (url || "").trim());
        localStorage.setItem(SUPABASE_CONFIG.STORAGE_ANON_KEY, (key || "").trim());
        this.initClient();
    }

    isConfigured() {
        const { url, key } = this.getCredentials();
        return !!(url && key && url.startsWith('http') && key.length > 20);
    }

    // =========================================================================
    // GOOGLE ADSENSE & ADS.TXT CONFIGURATION
    // =========================================================================
    getAdsenseConfig() {
        try {
            const raw = localStorage.getItem(SUPABASE_CONFIG.STORAGE_ADSENSE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return {
            publisherId: "pub-2400550373404770",
            autoAds: true,
            enabled: true
        };
    }

    saveAdsenseConfig(cfg) {
        localStorage.setItem(SUPABASE_CONFIG.STORAGE_ADSENSE_KEY, JSON.stringify(cfg));
    }

    initClient() {
        const { url, key } = this.getCredentials();
        if (url && key && window.supabase && typeof window.supabase.createClient === 'function') {
            try {
                this.client = window.supabase.createClient(url, key, {
                    auth: { persistSession: false }
                });
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal inisialisasi Supabase:", err);
                this.client = null;
            }
        } else {
            this.client = null;
        }
    }

    async testConnection() {
        if (!this.isConfigured()) {
            return { ok: false, message: "URL atau Anon Key Supabase belum diisi secara lengkap." };
        }
        if (!this.client) {
            this.initClient();
        }
        if (!this.client) {
            return { ok: false, message: "Library Supabase client tidak dapat dimuat." };
        }

        try {
            const { data, error } = await this.client
                .from('articles')
                .select('id')
                .limit(1);

            if (error) {
                if (error.code === '42P01' || error.code === 'PGRST205') {
                    return {
                        ok: false,
                        tableMissing: true,
                        message: "Koneksi Supabase berhasil terhubung, namun tabel database belum dibuat. Silakan jalankan file schema.sql di SQL Editor Supabase."
                    };
                }
                return { ok: false, message: `Error Supabase: ${error.message} (Kode: ${error.code || 'UNKNOWN'})` };
            }

            return { ok: true, message: "Koneksi ke Supabase aktif dan siap digunakan!" };
        } catch (err) {
            return { ok: false, message: `Gagal menghubungi server: ${err.message}` };
        }
    }

    // =========================================================================
    // MULTI-TENANT SITES (SUBDOMAINS) MANAGEMENT
    // =========================================================================
    normalizeSiteFromDb(row) {
        if (!row) return null;
        return {
            id: row.id,
            slug: row.slug,
            name: row.name,
            tagline: row.tagline || '',
            description: row.description || '',
            logoBadge: row.logo_badge || 'KD',
            themeColor: row.theme_color || '#2563eb',
            domain: `${row.slug}.kamidatang.com`,
            createdAt: row.created_at
        };
    }

    normalizeSiteToDb(site) {
        return {
            slug: site.slug.toLowerCase().trim(),
            name: site.name.trim(),
            tagline: site.tagline || '',
            description: site.description || '',
            logo_badge: site.logoBadge || 'KD',
            theme_color: site.themeColor || '#2563eb',
            updated_at: new Date().toISOString()
        };
    }

    async getSites() {
        // Coba ambil dari Supabase
        if (this.isConfigured() && this.client) {
            try {
                const { data, error } = await this.client
                    .from('sites')
                    .select('*')
                    .order('id', { ascending: true });

                if (!error && Array.isArray(data) && data.length > 0) {
                    const normalized = data.map(s => this.normalizeSiteFromDb(s));
                    localStorage.setItem(SUPABASE_CONFIG.STORAGE_SITES_KEY, JSON.stringify(normalized));
                    return normalized;
                }
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal fetch sites dari Supabase:", err);
            }
        }

        // Fallback: localStorage atau default sites
        let localSites = null;
        try {
            const raw = localStorage.getItem(SUPABASE_CONFIG.STORAGE_SITES_KEY);
            if (raw) localSites = JSON.parse(raw);
        } catch (e) {}

        return (Array.isArray(localSites) && localSites.length > 0) ? localSites : KAMIDATANG_DEFAULT_SITES;
    }

    async saveSite(siteData) {
        const payload = this.normalizeSiteToDb(siteData);

        if (this.isConfigured() && this.client) {
            try {
                const { data, error } = await this.client
                    .from('sites')
                    .upsert(payload, { onConflict: 'slug' })
                    .select();

                if (!error && data && data[0]) {
                    const saved = this.normalizeSiteFromDb(data[0]);
                    this.updateLocalSitesCache(saved);
                    return saved;
                }
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal simpan site ke Supabase:", err);
            }
        }

        // Fallback lokal
        const saved = {
            id: Date.now(),
            ...siteData,
            slug: payload.slug,
            domain: `${payload.slug}.kamidatang.com`
        };
        this.updateLocalSitesCache(saved);
        return saved;
    }

    async deleteSite(slug) {
        if (slug === 'main') return false; // Main site tidak boleh dihapus

        if (this.isConfigured() && this.client) {
            try {
                await this.client.from('sites').delete().eq('slug', slug);
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal hapus site di Supabase:", err);
            }
        }

        let sites = await this.getSites();
        sites = sites.filter(s => s.slug !== slug);
        localStorage.setItem(SUPABASE_CONFIG.STORAGE_SITES_KEY, JSON.stringify(sites));
        return true;
    }

    updateLocalSitesCache(savedSite) {
        let list = [];
        try {
            list = JSON.parse(localStorage.getItem(SUPABASE_CONFIG.STORAGE_SITES_KEY) || '[]');
        } catch (e) {}

        if (!Array.isArray(list) || list.length === 0) {
            list = [...KAMIDATANG_DEFAULT_SITES];
        }

        const idx = list.findIndex(s => s.slug === savedSite.slug);
        if (idx !== -1) {
            list[idx] = { ...list[idx], ...savedSite };
        } else {
            list.push(savedSite);
        }

        localStorage.setItem(SUPABASE_CONFIG.STORAGE_SITES_KEY, JSON.stringify(list));
    }

    // =========================================================================
    // ARTICLES & NORMALIZER
    // =========================================================================
    normalizeFromDb(row) {
        if (!row) return null;
        let tags = [];
        try {
            tags = Array.isArray(row.tags) ? row.tags : (typeof row.tags === 'string' ? JSON.parse(row.tags) : []);
        } catch (e) {
            tags = [];
        }

        let comments = [];
        try {
            comments = Array.isArray(row.comments) ? row.comments : (typeof row.comments === 'string' ? JSON.parse(row.comments) : []);
        } catch (e) {
            comments = [];
        }

        return {
            id: Number(row.id),
            siteSlug: row.site_slug || 'main', // 'main', 'delta', 'desh', atau 'global'
            status: row.status || 'Terbit',
            isMainHeadline: !!(row.is_main_headline ?? row.isMainHeadline),
            isSubHeadline: !!(row.is_sub_headline ?? row.isSubHeadline),
            dateline: row.dateline || 'JAKARTA, KAMIDATANG',
            title: row.title || 'Tanpa Judul',
            summary: row.summary || '',
            category: row.category || 'Nasional',
            tags: tags,
            date: row.date || new Date(row.created_at || Date.now()).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }),
            timeAgo: row.time_ago || row.timeAgo || 'Baru saja',
            author: row.author || 'Redaksi KAMIDATANG',
            views: Number(row.views || 0),
            image: row.image || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1000&q=80',
            caption: row.caption || '',
            content: row.content || '',
            comments: comments,
            createdAt: row.created_at || new Date().toISOString()
        };
    }

    normalizeToDb(art) {
        return {
            id: art.id,
            site_slug: art.siteSlug || 'main',
            title: art.title,
            summary: art.summary || '',
            category: art.category || 'Nasional',
            tags: art.tags || [],
            content: art.content || '',
            author: art.author || 'Redaksi KAMIDATANG',
            image: art.image || '',
            caption: art.caption || '',
            dateline: art.dateline || 'JAKARTA, KAMIDATANG',
            status: art.status || 'Terbit',
            is_main_headline: !!art.isMainHeadline,
            is_sub_headline: !!art.isSubHeadline,
            views: Number(art.views || 0),
            comments: art.comments || [],
            date: art.date || new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }),
            time_ago: art.timeAgo || 'Baru saja',
            updated_at: new Date().toISOString()
        };
    }

    /**
     * Mengambil artikel dengan filter Subdomain
     * @param {boolean} publishedOnly - jika true, hanya artikel berstatus Terbit
     * @param {string|null} siteFilter - 'all' (semua), atau slug subdomain seperti 'delta', 'desh', 'main'
     */
    async getArticles(publishedOnly = false, siteFilter = null) {
        // Cek apakah Supabase aktif
        if (this.isConfigured() && this.client) {
            try {
                let query = this.client
                    .from('articles')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (publishedOnly) {
                    query = query.eq('status', 'Terbit');
                }

                // Filter Subdomain di DB jika diminta:
                // Jika subdomain adalah 'main', ambil artikel 'main' dan 'global'
                // Jika subdomain khusus tim (misal 'delta', 'desh', 'dria'): FOKUS MURNI HANYA PADA SUBDOMAIN TERSEBUT
                if (siteFilter && siteFilter !== 'all') {
                    if (siteFilter === 'main') {
                        query = query.or('site_slug.eq.main,site_slug.eq.global');
                    } else {
                        query = query.eq('site_slug', siteFilter);
                    }
                }

                const { data, error } = await query;

                if (!error && Array.isArray(data) && data.length > 0) {
                    const normalized = data.map(item => this.normalizeFromDb(item));
                    if (!publishedOnly && (!siteFilter || siteFilter === 'all')) {
                        localStorage.setItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY, JSON.stringify(normalized));
                    }
                    return normalized;
                }
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal fetch artikel dari Supabase:", err);
            }
        }

        // Fallback: Ambil dari localStorage atau default
        let localData = null;
        try {
            const raw = localStorage.getItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY);
            if (raw) localData = JSON.parse(raw);
        } catch (e) {}

        let list = (Array.isArray(localData) && localData.length > 0) ? localData : KAMIDATANG_DEFAULT_ARTICLES;
        list = list.map(item => this.normalizeFromDb(item));

        if (publishedOnly) {
            list = list.filter(item => item.status === 'Terbit');
        }

        // Filter berdasarkan subdomain:
        // Jika subdomain khusus tim, fokus 100% hanya pada artikel subdomain tersebut
        if (siteFilter && siteFilter !== 'all') {
            if (siteFilter === 'main') {
                list = list.filter(item => item.siteSlug === 'main' || item.siteSlug === 'global' || !item.siteSlug);
            } else {
                const subList = list.filter(item => item.siteSlug === siteFilter);
                if (subList.length === 0) {
                    const defaults = KAMIDATANG_DEFAULT_ARTICLES.filter(item => item.siteSlug === siteFilter);
                    list = defaults.length > 0 ? defaults : subList;
                } else {
                    list = subList;
                }
            }
        }

        return list;
    }

    async saveArticle(articleData) {
        const payload = this.normalizeToDb(articleData);

        if (this.isConfigured() && this.client) {
            try {
                if (payload.is_main_headline) {
                    // Headline utama hanya direset untuk subdomain yang sama
                    await this.client
                        .from('articles')
                        .update({ is_main_headline: false })
                        .eq('site_slug', payload.site_slug)
                        .neq('id', payload.id);
                }

                const { data, error } = await this.client
                    .from('articles')
                    .upsert(payload, { onConflict: 'id' })
                    .select();

                if (!error && data && data[0]) {
                    const savedArt = this.normalizeFromDb(data[0]);
                    this.updateLocalCache(savedArt);
                    return savedArt;
                }
            } catch (err) {
                console.warn("[KamiDatang Backend] Supabase simpan gagal:", err);
            }
        }

        const savedArt = this.normalizeFromDb(payload);
        this.updateLocalCache(savedArt);
        return savedArt;
    }

    updateLocalCache(savedArt) {
        let list = [];
        try {
            list = JSON.parse(localStorage.getItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY) || '[]');
        } catch (e) {}

        if (!Array.isArray(list) || list.length === 0) {
            list = [...KAMIDATANG_DEFAULT_ARTICLES];
        }

        if (savedArt.isMainHeadline) {
            list.forEach(a => {
                if (a.siteSlug === savedArt.siteSlug) a.isMainHeadline = false;
            });
        }

        const idx = list.findIndex(a => a.id === savedArt.id);
        if (idx !== -1) {
            list[idx] = savedArt;
        } else {
            list.unshift(savedArt);
        }

        localStorage.setItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY, JSON.stringify(list));
    }

    async deleteArticle(id) {
        const numericId = Number(id);

        if (this.isConfigured() && this.client) {
            try {
                await this.client.from('articles').delete().eq('id', numericId);
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal hapus di Supabase:", err);
            }
        }

        let list = [];
        try {
            list = JSON.parse(localStorage.getItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY) || '[]');
        } catch (e) {}

        if (Array.isArray(list)) {
            list = list.filter(a => a.id !== numericId);
            localStorage.setItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY, JSON.stringify(list));
        }
        return true;
    }

    async incrementViews(id) {
        const numericId = Number(id);

        if (this.isConfigured() && this.client) {
            try {
                const { error } = await this.client.rpc('increment_article_views', { article_id: numericId });
                if (error) {
                    const { data: current } = await this.client
                        .from('articles')
                        .select('views')
                        .eq('id', numericId)
                        .single();

                    if (current) {
                        await this.client
                            .from('articles')
                            .update({ views: (current.views || 0) + 1 })
                            .eq('id', numericId);
                    }
                }
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal update view di Supabase:", err);
            }
        }

        let list = [];
        try {
            list = JSON.parse(localStorage.getItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY) || '[]');
        } catch (e) {}
        const art = list.find(a => a.id === numericId);
        if (art) {
            art.views = (art.views || 0) + 1;
            localStorage.setItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY, JSON.stringify(list));
        }
    }

    async addComment(articleId, commentObj) {
        const numericId = Number(articleId);
        let updatedComments = [];

        if (this.isConfigured() && this.client) {
            try {
                const { data, error } = await this.client
                    .from('articles')
                    .select('comments')
                    .eq('id', numericId)
                    .single();

                if (!error && data) {
                    let current = [];
                    try {
                        current = Array.isArray(data.comments) ? data.comments : JSON.parse(data.comments || '[]');
                    } catch (e) {}
                    current.unshift(commentObj);
                    updatedComments = current;

                    await this.client
                        .from('articles')
                        .update({ comments: current })
                        .eq('id', numericId);
                }
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal simpan komentar ke Supabase:", err);
            }
        }

        let list = [];
        try {
            list = JSON.parse(localStorage.getItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY) || '[]');
        } catch (e) {}
        const art = list.find(a => a.id === numericId);
        if (art) {
            if (!Array.isArray(art.comments)) art.comments = [];
            if (!updatedComments.length) {
                art.comments.unshift(commentObj);
                updatedComments = art.comments;
            } else {
                art.comments = updatedComments;
            }
            localStorage.setItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY, JSON.stringify(list));
        }

        return updatedComments;
    }

    async deleteComment(articleId, commentIndex) {
        const numericId = Number(articleId);
        let updatedComments = [];

        if (this.isConfigured() && this.client) {
            try {
                const { data, error } = await this.client
                    .from('articles')
                    .select('comments')
                    .eq('id', numericId)
                    .single();

                if (!error && data) {
                    let current = Array.isArray(data.comments) ? data.comments : JSON.parse(data.comments || '[]');
                    current.splice(commentIndex, 1);
                    updatedComments = current;

                    await this.client
                        .from('articles')
                        .update({ comments: current })
                        .eq('id', numericId);
                }
            } catch (err) {
                console.warn("[KamiDatang Backend] Gagal hapus komentar di Supabase:", err);
            }
        }

        let list = [];
        try {
            list = JSON.parse(localStorage.getItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY) || '[]');
        } catch (e) {}
        const art = list.find(a => a.id === numericId);
        if (art && Array.isArray(art.comments)) {
            art.comments.splice(commentIndex, 1);
            updatedComments = art.comments;
            localStorage.setItem(SUPABASE_CONFIG.STORAGE_CACHE_KEY, JSON.stringify(list));
        }

        return updatedComments;
    }

    // Ekspor semua artikel dan sites ke Supabase
    async exportLocalToSupabase() {
        if (!this.isConfigured() || !this.client) {
            return { ok: false, message: "Koneksi Supabase belum diatur." };
        }

        try {
            // 1. Ekspor Sites
            const sites = await this.getSites();
            const siteRows = sites.map(s => this.normalizeSiteToDb(s));
            await this.client.from('sites').upsert(siteRows, { onConflict: 'slug' });

            // 2. Ekspor Articles
            let articles = await this.getArticles(false, 'all');
            if (!articles || articles.length === 0) {
                articles = KAMIDATANG_DEFAULT_ARTICLES;
            }
            const articleRows = articles.map(item => this.normalizeToDb(item));
            await this.client.from('articles').upsert(articleRows, { onConflict: 'id' });

            return {
                ok: true,
                message: `Berhasil mengunggah ${siteRows.length} subdomain dan ${articleRows.length} artikel ke Supabase!`
            };
        } catch (err) {
            return { ok: false, message: `Gagal migrasi: ${err.message}` };
        }
    }

    subscribeToChanges(callback) {
        if (!this.isConfigured() || !this.client) return null;

        try {
            const channel = this.client
                .channel('kamidatang-multi-channel')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'articles' }, payload => {
                    if (typeof callback === 'function') callback('articles', payload);
                })
                .on('postgres_changes', { event: '*', schema: 'public', table: 'sites' }, payload => {
                    if (typeof callback === 'function') callback('sites', payload);
                })
                .subscribe();

            return channel;
        } catch (err) {
            console.warn("[KamiDatang Realtime] Gagal subscribe:", err);
            return null;
        }
    }
}

// Inisialisasi Instance Global
window.kamiBackend = new KamiDatangBackend();
