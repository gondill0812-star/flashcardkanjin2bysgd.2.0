const flashcards = [
  {
    part: 1,
    kanji: "参照",
    reading: "さんしょう",
    meaning: "rujukan, referensi, melihat sebagai acuan",
    sentence: "詳細については、下記の資料を参照してください。",
    sentenceReading: "しょうさい に ついて は、かき の しりょう を さんしょう して ください。",
    sentenceMeaning: "Untuk rincian lebih lanjut, silakan merujuk pada dokumen di bawah ini."
  },
  {
    part: 1,
    kanji: "距離",
    reading: "きょり",
    meaning: "jarak; selisih; perbedaan (hubungan)",
    sentence: "両国の文化的な距離は依然として大きい。",
    sentenceReading: "りょうこく の ぶんかてき な きょり は いぜん として おおきい。",
    sentenceMeaning: "Jarak budaya antara kedua negara tersebut masih tetap besar."
  },
  {
    part: 1,
    kanji: "願望",
    reading: "がんぼう",
    meaning: "keinginan, hasrat, ambisi",
    sentence: "若者の願望は社会の変化を反映している。",
    sentenceReading: "わかもの の がんぼう は しゃかい の へんか を はんえい して いる。",
    sentenceMeaning: "Hasrat kaum muda mencerminkan perubahan masyarakat."
  },
  {
    part: 1,
    kanji: "怪しい",
    reading: "あやしい",
    meaning: "mencurigakan, meragukan, aneh, tidak jelas",
    sentence: "その取引には怪しい点がいくつか見受けられる。",
    sentenceReading: "その とりひき に は あやしい てん が いくつか みうけられる。",
    sentenceMeaning: "Transaksi tersebut memiliki beberapa hal yang mencurigakan."
  },
  {
    part: 1,
    kanji: "油断",
    reading: "ゆだん",
    meaning: "lengah, ceroboh, kurang waspada",
    sentence: "一瞬の油断が重大な事故につながることがある。",
    sentenceReading: "いっしゅん の ゆだん が じゅうだい な じこ に つながる こと が ある。",
    sentenceMeaning: "Kelengahan sesaat bisa berujung pada kecelakaan serius."
  },
  {
    part: 1,
    kanji: "恥",
    reading: "はじ",
    meaning: "malu, aib, rasa hina",
    sentence: "不正行為は組織全体の恥となる。",
    sentenceReading: "ふせい こうい は そしき ぜんたい の はじ と なる。",
    sentenceMeaning: "Tindakan tidak jujur menjadi aib bagi seluruh organisasi."
  },
  {
    part: 1,
    kanji: "指摘",
    reading: "してき",
    meaning: "menunjukkan, menyoroti, mengkritik",
    sentence: "専門家は制度の問題点を指摘した。",
    sentenceReading: "せんもんか は せいど の もんだいてん を してき した。",
    sentenceMeaning: "Para ahli menyoroti masalah dalam sistem tersebut."
  },
  {
    part: 1,
    kanji: "投票",
    reading: "とうひょう",
    meaning: "pemungutan suara, voting",
    sentence: "国民は選挙で代表者に投票する。",
    sentenceReading: "こくみん は せんきょ で だいひょうしゃ に とうひょう する。",
    sentenceMeaning: "Warga memberikan suara kepada wakilnya dalam pemilu."
  },
  {
    part: 1,
    kanji: "批評",
    reading: "ひひょう",
    meaning: "kritik, ulasan, penilaian",
    sentence: "その作品は多くの批評家から高い評価を受けた。",
    sentenceReading: "その さくひん は おおく の ひひょうか から たかい ひょうか を うけた。",
    sentenceMeaning: "Karya tersebut mendapat penilaian tinggi dari para kritikus."
  },
  {
    part: 1,
    kanji: "催し",
    reading: "もよおし",
    meaning: "acara, kegiatan, penyelenggaraan",
    sentence: "地域交流を目的とした催しが開催された。",
    sentenceReading: "ちいき こうりゅう を もくてき と した もよおし が かいさい された。",
    sentenceMeaning: "Acara untuk pertukaran komunitas telah diselenggarakan."
  },
  {
    part: 1,
    kanji: "討論",
    reading: "とうろん",
    meaning: "diskusi, debat, perdebatan",
    sentence: "公開の場で活発な討論が行われた。",
    sentenceReading: "こうかい の ば で かっぱつ な とうろん が おこなわれた。",
    sentenceMeaning: "Diskusi aktif dilakukan di forum terbuka."
  },
  {
    part: 1,
    kanji: "混乱",
    reading: "こんらん",
    meaning: "kekacauan, kebingungan, ketidakteraturan",
    sentence: "突然の変更により現場は混乱した。",
    sentenceReading: "とつぜん の へんこう に より げんば は こんらん した。",
    sentenceMeaning: "Perubahan mendadak menyebabkan kekacauan di lapangan."
  },
  {
    part: 1,
    kanji: "硬貨",
    reading: "こうか",
    meaning: "koin, uang logam",
    sentence: "自動販売機は一部の硬貨しか使用できない。",
    sentenceReading: "じどうはんばいき は いちぶ の こうか しか しよう できない。",
    sentenceMeaning: "Mesin penjual otomatis hanya menerima koin tertentu."
  },
  {
    part: 1,
    kanji: "容姿",
    reading: "ようし",
    meaning: "penampilan, rupa, paras",
    sentence: "人を容姿だけで判断すべきではない。",
    sentenceReading: "ひと を ようし だけ で はんだん すべき で は ない。",
    sentenceMeaning: "Seseorang tidak seharusnya dinilai hanya dari penampilannya."
  },
  {
    part: 1,
    kanji: "講師",
    reading: "こうし",
    meaning: "pengajar, dosen, instruktur",
    sentence: "外部から専門の講師が招かれた。",
    sentenceReading: "がいぶ から せんもん の こうし が まねかれた。",
    sentenceMeaning: "Instruktur ahli diundang dari luar."
  },
  {
    part: 1,
    kanji: "密閉",
    reading: "みっぺい",
    meaning: "tertutup rapat, kedap, penyegelan",
    sentence: "容器は完全に密閉されている。",
    sentenceReading: "ようき は かんぜん に みっぺい されて いる。",
    sentenceMeaning: "Wadah tersebut tertutup rapat sepenuhnya."
  },
  {
    part: 1,
    kanji: "快い",
    reading: "こころよい",
    meaning: "menyenangkan, nyaman, enak dirasakan",
    sentence: "快い返事をいただき、感謝している。",
    sentenceReading: "こころよい へんじ を いただき、かんしゃ して いる。",
    sentenceMeaning: "Saya berterima kasih atas jawaban yang menyenangkan."
  },
  {
    part: 1,
    kanji: "鮮やか",
    reading: "あざやか",
    meaning: "cerah, jelas, mencolok, tajam",
    sentence: "彼女は鮮やかな手法で問題を解決した。",
    sentenceReading: "かのじょ は あざやか な しゅほう で もんだい を かいけつ した。",
    sentenceMeaning: "Ia menyelesaikan masalah dengan cara yang cemerlang."
  },
  {
    part: 1,
    kanji: "貴重",
    reading: "きちょう",
    meaning: "berharga, bernilai, langka",
    sentence: "この資料は研究にとって貴重である。",
    sentenceReading: "この しりょう は けんきゅう に とって きちょう で ある。",
    sentenceMeaning: "Dokumen ini sangat berharga bagi penelitian."
  },
  {
    part: 1,
    kanji: "和やか",
    reading: "なごやか",
    meaning: "ramah, hangat, damai, bersahabat, suasana tenang",
    sentence: "会議は和やかな雰囲気で進められた。",
    sentenceReading: "かいぎ は なごやか な ふんいき で すすめられた。",
    sentenceMeaning: "Rapat berlangsung dalam suasana yang ramah dan hangat."
  },
  {
    part: 1,
    kanji: "好調",
    reading: "こうちょう",
    meaning: "kondisi baik, lancar, stabil, performa bagus",
    sentence: "売上は今期も好調を維持している。",
    sentenceReading: "うりあげ は こんき も こうちょう を いじしている。",
    sentenceMeaning: "Penjualan tetap dalam kondisi baik pada kuartal ini."
  },
  {
    part: 1,
    kanji: "怖い",
    reading: "こわい",
    meaning: "takut, menakutkan, mengerikan, mengkhawatirkan",
    sentence: "夜道を一人で歩くのは怖い。",
    sentenceReading: "よみち を ひとり で あるく の は こわい。",
    sentenceMeaning: "Berjalan sendirian di jalan malam itu menakutkan."
  },
  {
    part: 1,
    kanji: "保証",
    reading: "ほしょう",
    meaning: "jaminan, garansi, penjaminan",
    sentence: "この製品には1年間の保証が付いている。",
    sentenceReading: "この せいひん に は いちねんかん の ほしょう が ついている。",
    sentenceMeaning: "Produk ini dilengkapi dengan garansi satu tahun."
  },
  {
    part: 1,
    kanji: "分析",
    reading: "ぶんせき",
    meaning: "analisis, penguraian, penelaahan",
    sentence: "データを細かく分析して報告書を作成した。",
    sentenceReading: "データ を こまかく ぶんせき して ほうこくしょ を さくせい した。",
    sentenceMeaning: "Data dianalisis secara detail dan laporan dibuat."
  },
  {
    part: 1,
    kanji: "拡張",
    reading: "かくちょう",
    meaning: "perluasan, ekspansi, pengembangan",
    sentence: "会社は事業を海外へ拡張した。",
    sentenceReading: "かいしゃ は じぎょう を かいがい へ かくちょう した。",
    sentenceMeaning: "Perusahaan memperluas bisnisnya ke luar negeri."
  },
  {
    part: 1,
    kanji: "警備",
    reading: "けいび",
    meaning: "penjagaan, pengamanan, keamanan",
    sentence: "イベント会場では厳重な警備が行われていた。",
    sentenceReading: "イベント かいじょう では げんじゅう な けいび が おこなわれていた。",
    sentenceMeaning: "Di lokasi acara, pengamanan dilakukan secara ketat."
  },
  {
    part: 1,
    kanji: "負担",
    reading: "ふたん",
    meaning: "beban, tanggungan, tekanan, beban biaya",
    sentence: "医療費の負担が家計を圧迫している。",
    sentenceReading: "いりょうひ の ふたん が かけい を あっぱく している。",
    sentenceMeaning: "Beban biaya pengobatan menekan keuangan rumah tangga."
  },
  {
    part: 1,
    kanji: "強火",
    reading: "つよび",
    meaning: "api besar, panas tinggi (memasak)",
    sentence: "強火で肉を焼くと外は焦げる。",
    sentenceReading: "つよび で にく を やく と そと は こげる。",
    sentenceMeaning: "Jika memanggang daging dengan api besar, bagian luar akan gosong."
  },
  {
    part: 1,
    kanji: "濃い",
    reading: "こい",
    meaning: "pekat, kental, kuat (rasa/warna), tebal",
    sentence: "このコーヒーは味が濃い。",
    sentenceReading: "この コーヒー は あじ が こい。",
    sentenceMeaning: "Kopi ini rasanya kuat/pekat."
  },
  {
    part: 1,
    kanji: "企画",
    reading: "きかく",
    meaning: "perencanaan, rancangan, proyek",
    sentence: "新しいイベントの企画を担当した。",
    sentenceReading: "あたらしい イベント の きかく を たんとう した。",
    sentenceMeaning: "Saya bertanggung jawab atas perencanaan acara baru."
  },
  {
    part: 1,
    kanji: "再度",
    reading: "さいど",
    meaning: "sekali lagi, ulang, untuk kedua kalinya",
    sentence: "問題が解決しなかったので、再度確認した。",
    sentenceReading: "もんだい が かいけつ しなかった ので、さいど かくにん した。",
    sentenceMeaning: "Karena masalah belum terselesaikan, saya memeriksanya sekali lagi."
  },
  {
    part: 1,
    kanji: "圧倒的",
    reading: "あっとうてき",
    meaning: "sangat unggul, luar biasa, dominan, overwhelming",
    sentence: "彼の演技は圧倒的だった。",
    sentenceReading: "かれ の えんぎ は あっとうてき だった。",
    sentenceMeaning: "Aksinya sungguh luar biasa."
  },
  {
    part: 1,
    kanji: "損害",
    reading: "そんがい",
    meaning: "kerugian, kerusakan, kerugian materi",
    sentence: "台風で建物に大きな損害が出た。",
    sentenceReading: "たいふう で たてもの に おおきな そんがい が でた。",
    sentenceMeaning: "Bangunan mengalami kerusakan besar akibat topan."
  },
  {
    part: 1,
    kanji: "柔軟",
    reading: "じゅうなん",
    meaning: "fleksibel, lentur, mudah menyesuaikan",
    sentence: "柔軟な考え方が求められる。",
    sentenceReading: "じゅうなん な かんがえかた が もとめられる。",
    sentenceMeaning: "Diperlukan pola pikir yang fleksibel."
  },
  {
    part: 1,
    kanji: "求人",
    reading: "きゅうじん",
    meaning: "lowongan kerja, perekrutan",
    sentence: "会社は新しいスタッフの求人を出した。",
    sentenceReading: "かいしゃ は あたらしい スタッフ の きゅうじん を だした。",
    sentenceMeaning: "Perusahaan mengumumkan lowongan untuk staf baru."
  },
  {
    part: 1,
    kanji: "荒い",
    reading: "あらい",
    meaning: "kasar, ganas, liar, buruk (cuaca/gelombang), kasar (tekstur)",
    sentence: "海の波が荒くて船が揺れた。",
    sentenceReading: "うみ の なみ が あらくて ふね が ゆれた。",
    sentenceMeaning: "Ombak laut begitu besar hingga kapal terguncang."
  },
  {
    part: 1,
    kanji: "冷蔵庫",
    reading: "れいぞうこ",
    meaning: "lemari es, kulkas",
    sentence: "食材は冷蔵庫に保存してください。",
    sentenceReading: "しょくざい は れいぞうこ に ほぞん して ください。",
    sentenceMeaning: "Simpan bahan makanan di lemari es."
  },
  {
    part: 1,
    kanji: "抽選",
    reading: "ちゅうせん",
    meaning: "undian, pengundian, lotere",
    sentence: "参加者は抽選で決められた。",
    sentenceReading: "さんかしゃ は ちゅうせん で きめられた。",
    sentenceMeaning: "Peserta dipilih melalui undian."
  },
  {
    part: 1,
    kanji: "演技",
    reading: "えんぎ",
    meaning: "akting, peran, penampilan (berpura-pura)",
    sentence: "彼女の演技は非常に自然だった。",
    sentenceReading: "かのじょ の えんぎ は ひじょう に しぜん だった。",
    sentenceMeaning: "Aksinya sangat alami."
  },
  {
    part: 2,
    kanji: "精算",
    reading: "せいさん",
    meaning: "penyelesaian pembayaran, perhitungan akhir, pelunasan",
    sentence: "旅行の費用は帰宅時に精算した。",
    sentenceReading: "りょこう の ひよう は きたくじ に せいさん した。",
    sentenceMeaning: "Biaya perjalanan dilunasi saat pulang."
  },
  {
    part: 2,
    kanji: "比較的",
    reading: "ひかくてき",
    meaning: "relatif, secara perbandingan, cukup",
    sentence: "今日の天気は比較的穏やかだ。",
    sentenceReading: "きょう の てんき は ひかくてき おだやか だ。",
    sentenceMeaning: "Cuaca hari ini relatif tenang."
  },
  {
    part: 2,
    kanji: "系統",
    reading: "けいとう",
    meaning: "sistem, garis keturunan, aliran, kelompok (teknis)",
    sentence: "この植物は特定の系統に属している。",
    sentenceReading: "この しょくぶつ は とくてい の けいとう に ぞくしている。",
    sentenceMeaning: "Tumbuhan ini termasuk dalam garis keturunan tertentu."
  },
  {
    part: 2,
    kanji: "趣味",
    reading: "しゅみ",
    meaning: "hobi, kegemaran, selera, minat",
    sentence: "読書は彼の趣味の一つだ。",
    sentenceReading: "どくしょ は かれ の しゅみ の ひとつ だ。",
    sentenceMeaning: "Membaca adalah salah satu hobinya."
  },
  {
    part: 2,
    kanji: "腕",
    reading: "うで",
    meaning: "lengan, kemampuan, keahlian, keterampilan",
    sentence: "彼は料理の腕が確かだ。",
    sentenceReading: "かれ は りょうり の うで が たしか だ。",
    sentenceMeaning: "Keahliannya dalam memasak memang terjamin."
  },
  {
    part: 2,
    kanji: "詳細",
    reading: "しょうさい",
    meaning: "detail, rincian, keterangan lengkap",
    sentence: "契約内容の詳細を確認してください。",
    sentenceReading: "けいやく ないよう の しょうさい を かくにん して ください。",
    sentenceMeaning: "Silakan periksa rincian isi kontrak."
  },
  {
    part: 2,
    kanji: "在籍",
    reading: "ざいせき",
    meaning: "terdaftar, tercatat sebagai anggota, masih bergabung",
    sentence: "彼は大学に在籍している学生だ。",
    sentenceReading: "かれ は だいがく に ざいせき している がくせい だ。",
    sentenceMeaning: "Dia adalah mahasiswa yang terdaftar di universitas."
  },
  {
    part: 2,
    kanji: "疲労",
    reading: "ひろう",
    meaning: "kelelahan, keletihan, keausan",
    sentence: "長時間の作業で疲労がたまった。",
    sentenceReading: "ちょうじかん の さぎょう で ひろう が たまった。",
    sentenceMeaning: "Kelelahan menumpuk akibat bekerja berjam-jam."
  },
  {
    part: 2,
    kanji: "福祉",
    reading: "ふくし",
    meaning: "kesejahteraan sosial, bantuan sosial",
    sentence: "地域の福祉制度を学んだ。",
    sentenceReading: "ちいき の ふくし せいど を まなんだ。",
    sentenceMeaning: "Saya mempelajari sistem kesejahteraan sosial di daerah tersebut."
  },
  {
    part: 2,
    kanji: "模範",
    reading: "もはん",
    meaning: "teladan, contoh ideal, model",
    sentence: "彼の行動は模範的だ。",
    sentenceReading: "かれ の こうどう は もはんてき だ。",
    sentenceMeaning: "Tindakannya adalah teladan."
  },
  {
    part: 2,
    kanji: "機嫌",
    reading: "きげん",
    meaning: "suasana hati, perasaan, kondisi (baik/buruk)",
    sentence: "子供の機嫌が良いと家族も幸せだ。",
    sentenceReading: "こども の きげん が よい と かぞく も しあわせ だ。",
    sentenceMeaning: "Jika suasana hati anak baik, keluarga pun bahagia."
  },
  {
    part: 2,
    kanji: "削除",
    reading: "さくじょ",
    meaning: "penghapusan, penghilangan, delete",
    sentence: "不要なファイルを削除した。",
    sentenceReading: "ふよう な ファイル を さくじょ した。",
    sentenceMeaning: "File yang tidak perlu telah dihapus."
  },
  {
    part: 2,
    kanji: "険しい",
    reading: "けわしい",
    meaning: "curam, terjal, berat, keras, sulit (situasi)",
    sentence: "険しい山道を登った。",
    sentenceReading: "けわしい やまみち を のぼった。",
    sentenceMeaning: "Saya mendaki jalan gunung yang terjal."
  },
  {
    part: 2,
    kanji: "研修",
    reading: "けんしゅう",
    meaning: "pelatihan, pembekalan, training",
    sentence: "新人研修が明日から始まる。",
    sentenceReading: "しんじん けんしゅう が あした から はじまる。",
    sentenceMeaning: "Pelatihan untuk karyawan baru dimulai besok."
  },
  {
    part: 2,
    kanji: "柔らかい",
    reading: "やわらかい",
    meaning: "lembut, lunak, empuk, fleksibel, halus",
    sentence: "このクッションは非常に柔らかい。",
    sentenceReading: "この クッション は ひじょう に やわらかい。",
    sentenceMeaning: "Bantal ini sangat empuk/lembut."
  },
  {
    part: 2,
    kanji: "農薬",
    reading: "のうやく",
    meaning: "pestisida, obat pertanian",
    sentence: "農薬の使用には注意が必要だ。",
    sentenceReading: "のうやく の しよう に は ちゅうい が ひつよう だ。",
    sentenceMeaning: "Perlu berhati-hati dalam penggunaan pestisida."
  },
  {
    part: 2,
    kanji: "厚かましい",
    reading: "あつかましい",
    meaning: "tidak tahu malu, lancang, berani kurang ajar",
    sentence: "彼の要求は厚かましいと思った。",
    sentenceReading: "かれ の ようきゅう は あつかましい と おもった。",
    sentenceMeaning: "Saya merasa permintaannya sangat lancang."
  },
  {
    part: 2,
    kanji: "背骨",
    reading: "せぼね",
    meaning: "tulang belakang, tulang punggung",
    sentence: "背骨を痛めないように注意する。",
    sentenceReading: "せぼね を いためない よう に ちゅうい する。",
    sentenceMeaning: "Berhati-hati agar tulang belakang tidak cedera."
  },
  {
    part: 2,
    kanji: "実践",
    reading: "じっせん",
    meaning: "praktik, penerapan langsung",
    sentence: "理論だけでなく実践も重要だ。",
    sentenceReading: "りろん だけ で なく じっせん も じゅうよう だ。",
    sentenceMeaning: "Tidak hanya teori, praktik juga penting."
  },
  {
    part: 2,
    kanji: "衣装",
    reading: "いしょう",
    meaning: "kostum, pakaian pertunjukan, busana",
    sentence: "舞台の衣装は豪華だった。",
    sentenceReading: "ぶたい の いしょう は ごうか だった。",
    sentenceMeaning: "Kostum di panggung sangat mewah."
  },
  {
    part: 2,
    kanji: "優秀",
    reading: "ゆうしゅう",
    meaning: "unggul, sangat baik, berprestasi, cakap",
    sentence: "彼は優秀な成績で卒業した。",
    sentenceReading: "かれ は ゆうしゅう な せいせき で そつぎょう した。",
    sentenceMeaning: "Dia lulus dengan prestasi yang sangat baik."
  },
  {
    part: 2,
    kanji: "簡潔",
    reading: "かんけつ",
    meaning: "singkat, padat, jelas, tidak bertele-tele",
    sentence: "報告は簡潔にまとめるべきだ。",
    sentenceReading: "ほうこく は かんけつ に まとめる べき だ。",
    sentenceMeaning: "Laporan harus diringkas secara singkat dan jelas."
  },
  {
    part: 2,
    kanji: "治療",
    reading: "ちりょう",
    meaning: "perawatan medis, pengobatan, terapi",
    sentence: "早期に治療を受けることが重要だ。",
    sentenceReading: "そうき に ちりょう を うける こと が じゅうよう だ。",
    sentenceMeaning: "Menerima pengobatan sejak dini itu penting."
  },
  {
    part: 2,
    kanji: "総額",
    reading: "そうがく",
    meaning: "jumlah total, total keseluruhan",
    sentence: "旅行費用の総額を計算した。",
    sentenceReading: "りょこう ひよう の そうがく を けいさん した。",
    sentenceMeaning: "Saya menghitung total biaya perjalanan."
  },
  {
    part: 2,
    kanji: "現象",
    reading: "げんしょう",
    meaning: "fenomena, gejala yang tampak",
    sentence: "虹は自然の美しい現象だ。",
    sentenceReading: "にじ は しぜん の うつくしい げんしょう だ。",
    sentenceMeaning: "Pelangi adalah fenomena alam yang indah."
  },
  {
    part: 2,
    kanji: "拒否",
    reading: "きょひ",
    meaning: "penolakan, menolak, refusal",
    sentence: "彼の提案は拒否された。",
    sentenceReading: "かれ の ていあん は きょひ された。",
    sentenceMeaning: "Usulnya ditolak."
  },
  {
    part: 2,
    kanji: "症状",
    reading: "しょうじょう",
    meaning: "gejala (penyakit), simptom",
    sentence: "発熱や咳は風邪の一般的な症状だ。",
    sentenceReading: "はつねつ や せき は かぜ の いっぱんてき な しょうじょう だ。",
    sentenceMeaning: "Demam dan batuk adalah gejala umum flu."
  },
  {
    part: 2,
    kanji: "憎い",
    reading: "にくい",
    meaning: "benci, menyebalkan, menjengkelkan, kejam",
    sentence: "敵の行動が憎いと思った。",
    sentenceReading: "てき の こうどう が にくい と おもった。",
    sentenceMeaning: "Saya merasa tindakan musuh sangat menyebalkan."
  },
  {
    part: 2,
    kanji: "省略",
    reading: "しょうりゃく",
    meaning: "penyingkatan, penghilangan, pengabaian",
    sentence: "長い文章は省略して書いた。",
    sentenceReading: "ながい ぶんしょう は しょうりゃく して かいた。",
    sentenceMeaning: "Saya menulis dengan menyingkat kalimat yang panjang."
  },
  {
    part: 2,
    kanji: "行事",
    reading: "ぎょうじ",
    meaning: "acara, kegiatan resmi, perayaan",
    sentence: "学校の行事に参加した。",
    sentenceReading: "がっこう の ぎょうじ に さんか した。",
    sentenceMeaning: "Saya ikut serta dalam acara sekolah."
  },
  {
    part: 2,
    kanji: "損失",
    reading: "そんしつ",
    meaning: "kerugian, kehilangan, loss",
    sentence: "地震で大きな損失が出た。",
    sentenceReading: "じしん で おおきな そんしつ が でた。",
    sentenceMeaning: "Terjadi kerugian besar akibat gempa."
  },
  {
    part: 2,
    kanji: "志望",
    reading: "しぼう",
    meaning: "aspirasi, keinginan kuat, pilihan (sekolah/pekerjaan)",
    sentence: "志望校に合格できて嬉しい。",
    sentenceReading: "しぼうこう に ごうかく できて うれしい。",
    sentenceMeaning: "Saya senang bisa diterima di sekolah impian."
  },
  {
    part: 2,
    kanji: "幼い",
    reading: "おさない",
    meaning: "kecil, masih kanak-kanak, belum dewasa",
    sentence: "幼い頃の思い出が懐かしい。",
    sentenceReading: "おさない ころ の おもいで が なつかしい。",
    sentenceMeaning: "Saya merindukan kenangan masa kecil."
  },
  {
    part: 2,
    kanji: "布",
    reading: "ぬの",
    meaning: "kain, bahan tekstil",
    sentence: "この布は肌触りが良い。",
    sentenceReading: "この ぬの は はだざわり が よい。",
    sentenceMeaning: "Kain ini nyaman saat disentuh."
  },
  {
    part: 2,
    kanji: "握手",
    reading: "あくしゅ",
    meaning: "jabat tangan",
    sentence: "会議の前に握手を交わした。",
    sentenceReading: "かいぎ の まえ に あくしゅ を かわした。",
    sentenceMeaning: "Kami saling berjabat tangan sebelum rapat."
  },
  {
    part: 2,
    kanji: "処理",
    reading: "しょり",
    meaning: "pengolahan, penanganan, pemrosesan, penyelesaian",
    sentence: "データを正確に処理する。",
    sentenceReading: "データ を せいかく に しょり する。",
    sentenceMeaning: "Memproses data secara akurat."
  },
  {
    part: 2,
    kanji: "管理",
    reading: "かんり",
    meaning: "manajemen, pengelolaan, pengawasan",
    sentence: "プロジェクトの進捗を管理する。",
    sentenceReading: "プロジェクト の しんちょく を かんり する。",
    sentenceMeaning: "Mengelola kemajuan proyek."
  },
  {
    part: 2,
    kanji: "短編",
    reading: "たんぺん",
    meaning: "cerita pendek, karya pendek",
    sentence: "短編小説を読んでリラックスした。",
    sentenceReading: "たんぺん しょうせつ を よんで リラックス した。",
    sentenceMeaning: "Saya bersantai dengan membaca cerita pendek."
  },
  {
    part: 2,
    kanji: "平等",
    reading: "びょうどう",
    meaning: "setara, sama rata, kesetaraan",
    sentence: "すべての人に平等な権利がある。",
    sentenceReading: "すべて の ひと に びょうどう な けんり が ある。",
    sentenceMeaning: "Semua orang memiliki hak yang setara."
  },
  {
    part: 2,
    kanji: "領収書",
    reading: "りょうしゅうしょ",
    meaning: "tanda terima, kwitansi",
    sentence: "支払い後に領収書をもらった。",
    sentenceReading: "しはらい ご に りょうしゅうしょ を もらった。",
    sentenceMeaning: "Saya menerima kwitansi setelah membayar."
  },
  {
    part: 3,
    kanji: "受講",
    reading: "じゅこう",
    meaning: "mengikuti kursus, mengambil pelajaran, menghadiri kelas",
    sentence: "彼は日本語の授業を受講している。",
    sentenceReading: "かれ は にほんご の じゅぎょう を じゅこう している。",
    sentenceMeaning: "Dia sedang mengikuti kelas bahasa Jepang."
  },
  {
    part: 3,
    kanji: "偶然",
    reading: "ぐうぜん",
    meaning: "kebetulan, secara tidak sengaja, chance",
    sentence: "駅で偶然旧友に会った。",
    sentenceReading: "えき で ぐうぜん きゅうゆう に あった。",
    sentenceMeaning: "Secara kebetulan saya bertemu teman lama di stasiun."
  },
  {
    part: 3,
    kanji: "製造",
    reading: "せいぞう",
    meaning: "produksi, pembuatan, manufaktur",
    sentence: "この工場で新しい自動車を製造している。",
    sentenceReading: "この こうじょう で あたらしい じどうしゃ を せいぞう している。",
    sentenceMeaning: "Pabrik ini memproduksi mobil baru."
  },
  {
    part: 3,
    kanji: "避難",
    reading: "ひなん",
    meaning: "evakuasi, mengungsi, berlindung",
    sentence: "地震の際には安全な場所へ避難する。",
    sentenceReading: "じしん の さい に は あんぜん な ばしょ へ ひなん する。",
    sentenceMeaning: "Saat gempa, evakuasi ke tempat aman."
  },
  {
    part: 3,
    kanji: "違反",
    reading: "いはん",
    meaning: "pelanggaran, melanggar aturan/hukum",
    sentence: "交通規則に違反すると罰金を払わなければならない。",
    sentenceReading: "こうつう きそく に いはん すると ばっきん を はらわなければならない。",
    sentenceMeaning: "Jika melanggar peraturan lalu lintas, harus membayar denda."
  },
  {
    part: 3,
    kanji: "陽気",
    reading: "ようき",
    meaning: "ceria, periang, suasana hangat, cerah",
    sentence: "彼は陽気で周囲の人を楽しませる。",
    sentenceReading: "かれ は ようき で しゅうい の ひと を たのしませる。",
    sentenceMeaning: "Dia ceria dan membuat orang-orang di sekitarnya senang."
  },
  {
    part: 3,
    kanji: "下旬",
    reading: "げじゅん",
    meaning: "akhir bulan (tanggal 21–akhir)",
    sentence: "会議は下旬に予定されている。",
    sentenceReading: "かいぎ は げじゅん に よてい されている。",
    sentenceMeaning: "Rapat dijadwalkan pada akhir bulan."
  },
  {
    part: 3,
    kanji: "軽傷",
    reading: "けいしょう",
    meaning: "luka ringan, cedera ringan",
    sentence: "事故で軽傷を負った。",
    sentenceReading: "じこ で けいしょう を おった。",
    sentenceMeaning: "Hanya menderita luka ringan akibat kecelakaan."
  },
  {
    part: 3,
    kanji: "損",
    reading: "そん",
    meaning: "rugi, kerugian, kehilangan",
    sentence: "無駄遣いをすると損をする。",
    sentenceReading: "むだづかい を すると そん を する。",
    sentenceMeaning: "Jika boros, kamu akan rugi."
  },
  {
    part: 3,
    kanji: "善良",
    reading: "ぜんりょう",
    meaning: "baik hati, bermoral baik, jujur",
    sentence: "彼は善良な市民として知られている。",
    sentenceReading: "かれ は ぜんりょう な しみん として しられている。",
    sentenceMeaning: "Dia dikenal sebagai warga yang baik hati."
  },
  {
    part: 3,
    kanji: "相互",
    reading: "そうご",
    meaning: "timbal balik, saling, mutual",
    sentence: "成功には相互の協力が必要だ。",
    sentenceReading: "せいこう に は そうご の きょうりょく が ひつよう だ。",
    sentenceMeaning: "Kesuksesan membutuhkan kerja sama timbal balik."
  },
  {
    part: 3,
    kanji: "辛い",
    reading: "つらい",
    meaning: "pedih, menyakitkan, berat, sulit, pahit",
    sentence: "失恋はとても辛い経験だ。",
    sentenceReading: "しつれん は とても つらい けいけん だ。",
    sentenceMeaning: "Putus cinta adalah pengalaman yang sangat menyakitkan."
  },
  {
    part: 3,
    kanji: "景色",
    reading: "けしき",
    meaning: "pemandangan, panorama",
    sentence: "山頂から美しい景色が見えた。",
    sentenceReading: "さんちょう から うつくしい けしき が みえた。",
    sentenceMeaning: "Dari puncak gunung terlihat pemandangan yang indah."
  },
  {
    part: 3,
    kanji: "防災",
    reading: "ぼうさい",
    meaning: "pencegahan bencana, mitigasi bencana",
    sentence: "学校では防災訓練が行われる。",
    sentenceReading: "がっこう で は ぼうさい くんれん が おこなわれる。",
    sentenceMeaning: "Di sekolah diadakan latihan mitigasi bencana."
  },
  {
    part: 3,
    kanji: "礼儀",
    reading: "れいぎ",
    meaning: "sopan santun, etika, tata krama",
    sentence: "日本では礼儀を重んじる文化がある。",
    sentenceReading: "にほん で は れいぎ を おもんじる ぶんか が ある。",
    sentenceMeaning: "Di Jepang ada budaya yang menekankan sopan santun."
  },
  {
    part: 3,
    kanji: "出世",
    reading: "しゅっせ",
    meaning: "naik jabatan, promosi, kesuksesan karier",
    sentence: "彼は若くして出世した。",
    sentenceReading: "かれ は わかく して しゅっせ した。",
    sentenceMeaning: "Dia dipromosikan pada usia muda."
  },
  {
    part: 3,
    kanji: "伝統",
    reading: "でんとう",
    meaning: "tradisi, warisan budaya",
    sentence: "この祭りは長い伝統を持つ。",
    sentenceReading: "この まつり は ながい でんとう を もつ。",
    sentenceMeaning: "Festival ini memiliki tradisi yang panjang."
  },
  {
    part: 3,
    kanji: "規模",
    reading: "きぼ",
    meaning: "skala, ukuran, lingkup",
    sentence: "プロジェクトの規模は非常に大きい。",
    sentenceReading: "ぷろじぇくと の きぼ は ひじょう に おおきい。",
    sentenceMeaning: "Skala proyek ini sangat besar."
  },
  {
    part: 3,
    kanji: "尊重",
    reading: "そんちょう",
    meaning: "menghormati, menghargai, respek",
    sentence: "他人の意見を尊重することが大切だ。",
    sentenceReading: "たにん の いけん を そんちょう する こと が たいせつ だ。",
    sentenceMeaning: "Penting untuk menghargai pendapat orang lain."
  },
  {
    part: 3,
    kanji: "隣",
    reading: "となり",
    meaning: "sebelah, tetangga, di samping",
    sentence: "隣の家には新しい家族が引っ越してきた。",
    sentenceReading: "となり の いえ に は あたらしい かぞく が ひっこして きた。",
    sentenceMeaning: "Keluarga baru pindah ke rumah sebelah."
  },
  {
    part: 3,
    kanji: "開催",
    reading: "かいさい",
    meaning: "penyelenggaraan, pelaksanaan (acara)",
    sentence: "来週、国際会議が開催される予定だ。",
    sentenceReading: "らいしゅう、こくさいかいぎ が かいさい される よてい だ。",
    sentenceMeaning: "Minggu depan, konferensi internasional akan diselenggarakan."
  },
  {
    part: 3,
    kanji: "要求",
    reading: "ようきゅう",
    meaning: "tuntutan, permintaan, desakan",
    sentence: "労働者は賃上げを要求した。",
    sentenceReading: "ろうどうしゃ は ちんあげ を ようきゅう した。",
    sentenceMeaning: "Para pekerja menuntut kenaikan gaji."
  },
  {
    part: 3,
    kanji: "調節",
    reading: "ちょうせつ",
    meaning: "penyesuaian, pengaturan, kontrol",
    sentence: "温度を適切に調節してください。",
    sentenceReading: "おんど を てきせつ に ちょうせつ して ください。",
    sentenceMeaning: "Silakan atur suhu dengan tepat."
  },
  {
    part: 3,
    kanji: "至急",
    reading: "しきゅう",
    meaning: "segera, mendesak, secepatnya",
    sentence: "この書類は至急提出する必要がある。",
    sentenceReading: "この しょるい は しきゅう ていしゅつ する ひつよう が ある。",
    sentenceMeaning: "Dokumen ini harus segera diserahkan."
  },
  {
    part: 3,
    kanji: "象徴",
    reading: "しょうちょう",
    meaning: "simbol, lambang, perlambang",
    sentence: "桜は日本の春の象徴だ。",
    sentenceReading: "さくら は にほん の はる の しょうちょう だ。",
    sentenceMeaning: "Bunga sakura adalah simbol musim semi di Jepang."
  },
  {
    part: 3,
    kanji: "激しい",
    reading: "はげしい",
    meaning: "keras, hebat, intens, sengit",
    sentence: "昨夜、激しい雨が降った。",
    sentenceReading: "さくや、はげしい あめ が ふった。",
    sentenceMeaning: "Tadi malam hujan turun dengan deras."
  },
  {
    part: 3,
    kanji: "登録",
    reading: "とうろく",
    meaning: "pendaftaran, registrasi, pencatatan",
    sentence: "新しいアカウントを登録した。",
    sentenceReading: "あたらしい あかうんと を とうろく した。",
    sentenceMeaning: "Saya mendaftar akun baru."
  },
  {
    part: 3,
    kanji: "変更",
    reading: "へんこう",
    meaning: "perubahan, modifikasi",
    sentence: "会議の時間を変更する必要がある。",
    sentenceReading: "かいぎ の じかん を へんこう する ひつよう が ある。",
    sentenceMeaning: "Perlu mengubah waktu rapat."
  },
  {
    part: 3,
    kanji: "地元",
    reading: "じもと",
    meaning: "daerah asal, lokal, setempat",
    sentence: "地元のニュースをチェックした。",
    sentenceReading: "じもと の にゅーす を ちぇっく した。",
    sentenceMeaning: "Saya mengecek berita lokal."
  },
  {
    part: 3,
    kanji: "密接",
    reading: "みっせつ",
    meaning: "erat, dekat, berhubungan kuat",
    sentence: "研究者たちは密接に協力している。",
    sentenceReading: "けんきゅうしゃ たち は みっせつ に きょうりょく して いる。",
    sentenceMeaning: "Para peneliti bekerja sama dengan erat."
  },
  {
    part: 3,
    kanji: "豊富",
    reading: "ほうふ",
    meaning: "melimpah, banyak, kaya (sumber)",
    sentence: "この地域は水資源が豊富だ。",
    sentenceReading: "この ちいき は すいしげん が ほうふ だ。",
    sentenceMeaning: "Wilayah ini kaya akan sumber air."
  },
  {
    part: 3,
    kanji: "率直",
    reading: "そっちょく",
    meaning: "jujur, terus terang, apa adanya",
    sentence: "率直な意見を聞かせてください。",
    sentenceReading: "そっちょく な いけん を きかせて ください。",
    sentenceMeaning: "Tolong berikan pendapat yang jujur."
  },
  {
    part: 3,
    kanji: "装置",
    reading: "そうち",
    meaning: "alat, perangkat, peralatan",
    sentence: "新しい装置を導入した。",
    sentenceReading: "あたらしい そうち を どうにゅう した。",
    sentenceMeaning: "Kami memasang perangkat baru."
  },
  {
    part: 3,
    kanji: "焦点",
    reading: "しょうてん",
    meaning: "fokus, titik pusat perhatian",
    sentence: "議論の焦点は経済政策にある。",
    sentenceReading: "ぎろん の しょうてん は けいざい せいさく に ある。",
    sentenceMeaning: "Fokus diskusi ada pada kebijakan ekonomi."
  },
  {
    part: 3,
    kanji: "積極的",
    reading: "せっきょくてき",
    meaning: "aktif, proaktif, agresif (positif)",
    sentence: "積極的に質問することが大切だ。",
    sentenceReading: "せっきょくてき に しつもん する こと が たいせつ だ。",
    sentenceMeaning: "Penting untuk bertanya secara proaktif."
  },
  {
    part: 3,
    kanji: "抵抗",
    reading: "ていこう",
    meaning: "perlawanan, resistensi, hambatan",
    sentence: "変化に対する抵抗が強い。",
    sentenceReading: "へんか に たいする ていこう が つよい。",
    sentenceMeaning: "Ada perlawanan yang kuat terhadap perubahan."
  },
  {
    part: 3,
    kanji: "肩",
    reading: "かた",
    meaning: "bahu, pundak",
    sentence: "重い荷物で肩が痛くなった。",
    sentenceReading: "おもい にもつ で かた が いたく なった。",
    sentenceMeaning: "Bahu saya sakit karena membawa beban berat."
  },
  {
    part: 3,
    kanji: "抽象的",
    reading: "ちゅうしょうてき",
    meaning: "abstrak, tidak konkret",
    sentence: "抽象的な概念を理解するのは難しい。",
    sentenceReading: "ちゅうしょうてき な がいねん を りかい する の は むずかしい。",
    sentenceMeaning: "Sulit untuk memahami konsep yang abstrak."
  },
  {
    part: 3,
    kanji: "針",
    reading: "はり",
    meaning: "jarum, penunjuk (jam), duri",
    sentence: "時計の針が12時を指している。",
    sentenceReading: "とけい の はり が じゅうにじ を さして いる。",
    sentenceMeaning: "Jarum jam menunjukkan pukul 12."
  },
  {
    part: 3,
    kanji: "撮影",
    reading: "さつえい",
    meaning: "pemotretan, pengambilan gambar",
    sentence: "映画の撮影が来月始まる。",
    sentenceReading: "えいが の さつえい が らいげつ はじまる。",
    sentenceMeaning: "Pengambilan gambar film akan dimulai bulan depan."
  },
  {
    part: 4,
    kanji: "収穫",
    reading: "しゅうかく",
    meaning: "panen, hasil panen, hasil usaha",
    sentence: "今年の稲の収穫は豊かだった。",
    sentenceReading: "ことし の いね の しゅうかく は ゆたか だった。",
    sentenceMeaning: "Hasil panen padi tahun ini melimpah."
  },
  {
    part: 4,
    kanji: "勢い",
    reading: "いきおい",
    meaning: "momentum, tenaga, kekuatan, semangat, laju",
    sentence: "チームは勢いに乗って勝利した。",
    sentenceReading: "チーム は いきおい に のって しょうり した。",
    sentenceMeaning: "Tim meraih kemenangan berkat momentum mereka."
  },
  {
    part: 4,
    kanji: "組織",
    reading: "そしき",
    meaning: "organisasi, struktur, jaringan",
    sentence: "会社の組織は効率的に運営されている。",
    sentenceReading: "かいしゃ の そしき は こうりつてき に うんえい されている。",
    sentenceMeaning: "Organisasi perusahaan dijalankan secara efisien."
  },
  {
    part: 4,
    kanji: "世の中",
    reading: "よのなか",
    meaning: "dunia, masyarakat, keadaan sosial",
    sentence: "世の中には色々な考え方がある。",
    sentenceReading: "よ の なか に は いろいろ な かんがえかた が ある。",
    sentenceMeaning: "Di dunia ini, ada berbagai macam cara berpikir."
  },
  {
    part: 4,
    kanji: "講義",
    reading: "こうぎ",
    meaning: "kuliah, ceramah, pengajaran",
    sentence: "大学の講義は毎週月曜日にある。",
    sentenceReading: "だいがく の こうぎ は まいしゅう げつようび に ある。",
    sentenceMeaning: "Kuliah di universitas diadakan setiap hari Senin."
  },
  {
    part: 4,
    kanji: "招待",
    reading: "しょうたい",
    meaning: "undangan, mengundang",
    sentence: "結婚式に友達を招待した。",
    sentenceReading: "けっこんしき に ともだち を しょうたい した。",
    sentenceMeaning: "Saya mengundang teman ke pernikahan."
  },
  {
    part: 4,
    kanji: "清潔",
    reading: "せいけつ",
    meaning: "bersih, higienis, suci",
    sentence: "手を清潔に保つことが大切だ。",
    sentenceReading: "て を せいけつ に たもつ こと が たいせつ だ。",
    sentenceMeaning: "Menjaga tangan tetap bersih itu penting."
  },
  {
    part: 4,
    kanji: "姿勢",
    reading: "しせい",
    meaning: "postur, sikap tubuh, sikap (mental)",
    sentence: "正しい姿勢で座ることは健康に良い。",
    sentenceReading: "ただしい しせい で すわる こと は けんこう に よい。",
    sentenceMeaning: "Duduk dengan postur yang benar baik untuk kesehatan."
  },
  {
    part: 4,
    kanji: "逃亡",
    reading: "とうぼう",
    meaning: "pelarian, melarikan diri",
    sentence: "犯人は警察から逃亡した。",
    sentenceReading: "はんにん は けいさつ から とうぼう した。",
    sentenceMeaning: "Tersangka melarikan diri dari polisi."
  },
  {
    part: 4,
    kanji: "真剣",
    reading: "しんけん",
    meaning: "serius, sungguh-sungguh, pedang asli",
    sentence: "彼は仕事に真剣に取り組んでいる。",
    sentenceReading: "かれ は しごと に しんけん に とりくんでいる。",
    sentenceMeaning: "Dia serius menangani pekerjaannya."
  },
  {
    part: 4,
    kanji: "寄付",
    reading: "きふ",
    meaning: "donasi, sumbangan",
    sentence: "彼は慈善団体に寄付をした。",
    sentenceReading: "かれ は じぜん だんたい に きふ を した。",
    sentenceMeaning: "Dia memberikan sumbangan ke organisasi amal."
  },
  {
    part: 4,
    kanji: "即座",
    reading: "そくざ",
    meaning: "segera, langsung, seketika",
    sentence: "質問に即座に答えた。",
    sentenceReading: "しつもん に そくざ に こたえた。",
    sentenceMeaning: "Saya menjawab pertanyaan itu segera."
  },
  {
    part: 4,
    kanji: "大幅",
    reading: "おおはば",
    meaning: "besar (perubahan), signifikan",
    sentence: "売上は大幅に増加した。",
    sentenceReading: "うりあげ は おおはば に ぞうか した。",
    sentenceMeaning: "Penjualan meningkat secara signifikan."
  },
  {
    part: 4,
    kanji: "悔しい",
    reading: "くやしい",
    meaning: "menyesal, kecewa, sakit hati",
    sentence: "試合に負けて悔しかった。",
    sentenceReading: "しあい に まけて くやしかった。",
    sentenceMeaning: "Aku kecewa karena kalah dalam pertandingan."
  },
  {
    part: 4,
    kanji: "幼稚",
    reading: "ようち",
    meaning: "kekanak-kanakan, belum dewasa",
    sentence: "彼の行動は幼稚に見える。",
    sentenceReading: "かれ の こうどう は ようち に みえる。",
    sentenceMeaning: "Tindakannya terlihat kekanak-kanakan."
  },
  {
    part: 4,
    kanji: "極端",
    reading: "きょくたん",
    meaning: "ekstrem, berlebihan",
    sentence: "極端な意見は議論を難しくする。",
    sentenceReading: "きょくたん な いけん は ぎろん を むずかしく する。",
    sentenceMeaning: "Pendapat yang ekstrem membuat diskusi sulit."
  },
  {
    part: 4,
    kanji: "圧勝",
    reading: "あっしょう",
    meaning: "kemenangan telak",
    sentence: "チームは圧勝で試合に勝った。",
    sentenceReading: "チーム は あっしょう で しあい に かった。",
    sentenceMeaning: "Tim menang dengan telak dalam pertandingan."
  },
  {
    part: 4,
    kanji: "傷みやすい",
    reading: "いたみやすい",
    meaning: "mudah rusak, mudah basi, mudah memburuk",
    sentence: "この果物は傷みやすいので早く食べてください。",
    sentenceReading: "この くだもの は いたみやすい ので はやく たべて ください。",
    sentenceMeaning: "Buah ini mudah rusak, jadi segera dimakan."
  },
  {
    part: 4,
    kanji: "接続",
    reading: "せつぞく",
    meaning: "koneksi, penyambungan, hubungan",
    sentence: "インターネット接続が不安定だ。",
    sentenceReading: "インターネット せつぞく が ふあんてい だ。",
    sentenceMeaning: "Koneksi internet tidak stabil."
  },
  {
    part: 4,
    kanji: "批判",
    reading: "ひはん",
    meaning: "kritik, kecaman",
    sentence: "彼の意見は批判を受けた。",
    sentenceReading: "かれ の いけん は ひはん を うけた。",
    sentenceMeaning: "Pendapatnya mendapat kritik."
  },
  {
    part: 4,
    kanji: "継続",
    reading: "けいぞく",
    meaning: "kelanjutan, keberlanjutan, terus-menerus",
    sentence: "努力を継続することが大切だ。",
    sentenceReading: "どりょく を けいぞく する こと が たいせつ だ。",
    sentenceMeaning: "Melanjutkan usaha itu penting."
  },
  {
    part: 4,
    kanji: "貿易",
    reading: "ぼうえき",
    meaning: "perdagangan (ekspor-impor)",
    sentence: "日本は多くの国と貿易を行っている。",
    sentenceReading: "にほん は おおく の くに と ぼうえき を おこなっている。",
    sentenceMeaning: "Jepang melakukan perdagangan dengan banyak negara."
  },
  {
    part: 4,
    kanji: "詳しい",
    reading: "くわしい",
    meaning: "rinci, detail, paham dengan baik",
    sentence: "彼は法律に詳しい。",
    sentenceReading: "かれ は ほうりつ に くわしい。",
    sentenceMeaning: "Dia paham dengan baik tentang hukum."
  },
  {
    part: 4,
    kanji: "援助",
    reading: "えんじょ",
    meaning: "bantuan, pertolongan, dukungan",
    sentence: "災害時に多くの援助が届いた。",
    sentenceReading: "さいがいじ に おおく の えんじょ が とどいた。",
    sentenceMeaning: "Banyak bantuan sampai saat bencana."
  },
  {
    part: 4,
    kanji: "帰省",
    reading: "きせい",
    meaning: "pulang ke kampung halaman",
    sentence: "正月に実家へ帰省した。",
    sentenceReading: "しょうがつ に じっか へ きせい した。",
    sentenceMeaning: "Saya pulang ke rumah orang tua saat Tahun Baru."
  },
  {
    part: 4,
    kanji: "面倒",
    reading: "めんどう",
    meaning: "merepotkan, ribet, kesulitan, perawatan",
    sentence: "この手続きは面倒だ。",
    sentenceReading: "この てつづき は めんどう だ。",
    sentenceMeaning: "Prosedur ini merepotkan."
  },
  {
    part: 4,
    kanji: "異色",
    reading: "いしょく",
    meaning: "berbeda, unik, tidak biasa",
    sentence: "彼は異色の経歴を持っている。",
    sentenceReading: "かれ は いしょく の けいれき を もっている。",
    sentenceMeaning: "Dia memiliki latar belakang yang unik."
  },
  {
    part: 4,
    kanji: "下降",
    reading: "かこう",
    meaning: "penurunan, turun",
    sentence: "株価は昨日下降した。",
    sentenceReading: "かぶか は きのう かこう した。",
    sentenceMeaning: "Harga saham turun kemarin."
  },
  {
    part: 4,
    kanji: "拡充",
    reading: "かくじゅう",
    meaning: "perluasan, penguatan, penambahan",
    sentence: "会社は事業を拡充している。",
    sentenceReading: "かいしゃ は じぎょう を かくじゅう している。",
    sentenceMeaning: "Perusahaan memperluas usahanya."
  },
  {
    part: 4,
    kanji: "著しい",
    reading: "いちじるしい",
    meaning: "mencolok, signifikan, luar biasa",
    sentence: "売上は著しく増加した。",
    sentenceReading: "うりあげ は いちじるしく ぞうか した。",
    sentenceMeaning: "Penjualan meningkat secara signifikan."
  },
  {
    part: 4,
    kanji: "声援",
    reading: "せいえん",
    meaning: "sorakan dukungan, dukungan suara",
    sentence: "観客の声援で選手たちは力を出した。",
    sentenceReading: "かんきゃく の せいえん で せんしゅたち は ちから を だした。",
    sentenceMeaning: "Para pemain mendapat tenaga dari sorakan dukungan penonton."
  },
  {
    part: 4,
    kanji: "破片",
    reading: "はへん",
    meaning: "pecahan, serpihan",
    sentence: "ガラスの破片に気をつけてください。",
    sentenceReading: "ガラス の はへん に きを つけて ください。",
    sentenceMeaning: "Hati-hati dengan pecahan kaca."
  },
  {
    part: 4,
    kanji: "返品",
    reading: "へんぴん",
    meaning: "pengembalian barang, retur",
    sentence: "商品を返品した。",
    sentenceReading: "しょうひん を へんぴん した。",
    sentenceMeaning: "Saya mengembalikan barang."
  },
  {
    part: 4,
    kanji: "豊",
    reading: "ゆたか",
    meaning: "kaya, melimpah, subur",
    sentence: "この地域は自然が豊かだ。",
    sentenceReading: "この ちいき は しぜん が ゆたか だ。",
    sentenceMeaning: "Wilayah ini kaya akan alam."
  },
  {
    part: 4,
    kanji: "乱暴",
    reading: "らんぼう",
    meaning: "kasar, brutal, sembrono",
    sentence: "彼は乱暴な態度を取った。",
    sentenceReading: "かれ は らんぼう な たいど を とった。",
    sentenceMeaning: "Dia bersikap kasar."
  },
  {
    part: 4,
    kanji: "弱点",
    reading: "じゃくてん",
    meaning: "kelemahan, titik lemah",
    sentence: "誰にでも弱点はある。",
    sentenceReading: "だれ に でも じゃくてん は ある。",
    sentenceMeaning: "Semua orang punya kelemahan."
  },
  {
    part: 4,
    kanji: "勧誘",
    reading: "かんゆう",
    meaning: "ajakan, perekrutan, bujukan",
    sentence: "勧誘の電話がかかってきた。",
    sentenceReading: "かんゆう の でんわ が かかってきた。",
    sentenceMeaning: "Telepon ajakan datang."
  },
  {
    part: 4,
    kanji: "情景",
    reading: "じょうけい",
    meaning: "pemandangan, adegan, suasana",
    sentence: "情景を写真に撮った。",
    sentenceReading: "じょうけい を しゃしん に とった。",
    sentenceMeaning: "Saya mengambil gambar pemandangan."
  },
  {
    part: 4,
    kanji: "乏しい",
    reading: "とぼしい",
    meaning: "kurang, miskin, sedikit",
    sentence: "資源が乏しい地域だ。",
    sentenceReading: "しげん が とぼしい ちいき だ。",
    sentenceMeaning: "Wilayah yang miskin sumber daya."
  },
  {
    part: 4,
    kanji: "介護",
    reading: "かいご",
    meaning: "perawatan (orang lanjut usia/sakit)",
    sentence: "高齢者の介護は大変だ。",
    sentenceReading: "こうれいしゃ の かいご は たいへん だ。",
    sentenceMeaning: "Merawat orang lanjut usia itu sulit."
  },
  {
    part: 5,
    kanji: "賛否",
    reading: "さんぴ",
    meaning: "pro dan kontra, setuju dan menentang",
    sentence: "その計画には賛否が分かれた。",
    sentenceReading: "その けいかく に は さんぴ が わかれた。",
    sentenceMeaning: "Rencana itu menimbulkan pro dan kontra."
  },
  {
    part: 5,
    kanji: "順調",
    reading: "じゅんちょう",
    meaning: "lancar, berjalan baik, stabil",
    sentence: "仕事は順調に進んでいる。",
    sentenceReading: "しごと は じゅんちょう に すすんでいる。",
    sentenceMeaning: "Pekerjaan berjalan lancar."
  },
  {
    part: 5,
    kanji: "永久",
    reading: "えいきゅう",
    meaning: "abadi, permanen, selamanya",
    sentence: "友情は永久に続く。",
    sentenceReading: "ゆうじょう は えいきゅう に つづく。",
    sentenceMeaning: "Persahabatan berlanjut selamanya."
  },
  {
    part: 5,
    kanji: "記憶",
    reading: "きおく",
    meaning: "ingatan, memori",
    sentence: "子供の頃の記憶は鮮明だ。",
    sentenceReading: "こども の ころ の きおく は せんめい だ。",
    sentenceMeaning: "Ingatan masa kecil itu jelas."
  },
  {
    part: 5,
    kanji: "偉い",
    reading: "えらい",
    meaning: "hebat, luar biasa, terhormat, penting",
    sentence: "彼は偉い科学者だ。",
    sentenceReading: "かれ は えらい かがくしゃ だ。",
    sentenceMeaning: "Dia adalah ilmuwan hebat."
  },
  {
    part: 5,
    kanji: "刺激",
    reading: "しげき",
    meaning: "rangsangan, stimulus, dorongan",
    sentence: "新しい経験が刺激になる。",
    sentenceReading: "あたらしい けいけん が しげき に なる。",
    sentenceMeaning: "Pengalaman baru menjadi dorongan."
  },
  {
    part: 5,
    kanji: "典型的",
    reading: "てんけいてき",
    meaning: "khas, tipikal, representatif",
    sentence: "これは典型的な例だ。",
    sentenceReading: "これ は てんけいてき な れい だ。",
    sentenceMeaning: "Ini adalah contoh yang khas."
  },
  {
    part: 5,
    kanji: "途端に",
    reading: "とたんに",
    meaning: "tepat setelah, seketika, begitu",
    sentence: "家を出た途端に雨が降り出した。",
    sentenceReading: "いえ を でた とたん に あめ が ふりだした。",
    sentenceMeaning: "Begitu keluar rumah, hujan mulai turun."
  },
  {
    part: 5,
    kanji: "素材",
    reading: "そざい",
    meaning: "bahan, material, bahan mentah",
    sentence: "この料理は素材が命だ。",
    sentenceReading: "この りょうり は そざい が いのち だ。",
    sentenceMeaning: "Bahan makanan ini adalah kunci."
  },
  {
    part: 5,
    kanji: "垂直",
    reading: "すいちょく",
    meaning: "tegak lurus, vertikal",
    sentence: "壁が垂直に立っている。",
    sentenceReading: "かべ が すいちょく に たっている。",
    sentenceMeaning: "Dinding berdiri tegak lurus."
  },
  {
    part: 5,
    kanji: "住居",
    reading: "じゅうきょ",
    meaning: "tempat tinggal, hunian",
    sentence: "新しい住居に引っ越した。",
    sentenceReading: "あたらしい じゅうきょ に ひっこした。",
    sentenceMeaning: "Saya pindah ke tempat tinggal baru."
  },
  {
    part: 5,
    kanji: "世間",
    reading: "せけん",
    meaning: "masyarakat, dunia luar, opini publik",
    sentence: "世間の目を気にする。",
    sentenceReading: "せけん の め を きに する。",
    sentenceMeaning: "Memperhatikan pandangan masyarakat."
  },
  {
    part: 5,
    kanji: "勇ましい",
    reading: "いさましい",
    meaning: "gagah berani, bersemangat, heroik",
    sentence: "勇ましい戦士たち。",
    sentenceReading: "いさましい せんし たち。",
    sentenceMeaning: "Para pejuang yang gagah berani."
  },
  {
    part: 5,
    kanji: "欲",
    reading: "よく",
    meaning: "keinginan, nafsu, hasrat",
    sentence: "人間の欲は尽きない。",
    sentenceReading: "にんげん の よく は つきない。",
    sentenceMeaning: "Hasrat manusia tidak pernah habis."
  },
  {
    part: 5,
    kanji: "俳優",
    reading: "はいゆう",
    meaning: "aktor, pemeran",
    sentence: "彼は有名な俳優だ。",
    sentenceReading: "かれ は ゆうめい な はいゆう だ。",
    sentenceMeaning: "Dia adalah aktor terkenal."
  },
  {
    part: 5,
    kanji: "診断",
    reading: "しんだん",
    meaning: "diagnosis, penilaian medis",
    sentence: "医者が診断を下した。",
    sentenceReading: "いしゃ が しんだん を くだした。",
    sentenceMeaning: "Dokter memberikan diagnosis."
  },
  {
    part: 5,
    kanji: "等しい",
    reading: "ひとしい",
    meaning: "sama, setara, sebanding",
    sentence: "二つの値は等しい。",
    sentenceReading: "ふたつ の あたい は ひとしい。",
    sentenceMeaning: "Kedua nilai itu sama."
  },
  {
    part: 5,
    kanji: "返却",
    reading: "へんきゃく",
    meaning: "pengembalian, menyerahkan kembali",
    sentence: "本を図書館に返却した。",
    sentenceReading: "ほん を としょかん に へんきゃく した。",
    sentenceMeaning: "Saya mengembalikan buku ke perpustakaan."
  },
  {
    part: 5,
    kanji: "運賃",
    reading: "うんちん",
    meaning: "ongkos, tarif transportasi",
    sentence: "運賃は事前に確認してください。",
    sentenceReading: "うんちん は じぜん に かくにん して ください。",
    sentenceMeaning: "Harap cek ongkos terlebih dahulu."
  },
  {
    part: 5,
    kanji: "離れる",
    reading: "はなれる",
    meaning: "menjauh, berpisah, terpisah",
    sentence: "駅から離れた場所に住んでいる。",
    sentenceReading: "えき から はなれた ばしょ に すんでいる。",
    sentenceMeaning: "Saya tinggal di tempat yang jauh dari stasiun."
  },
  {
    part: 5,
    kanji: "外れる",
    reading: "はずれる",
    meaning: "lepas, terlepas, meleset, tidak tepat, gagal",
    sentence: "ボタンが外れた。",
    sentenceReading: "ボタン が はずれた。",
    sentenceMeaning: "Kancingnya lepas."
  },
  {
    part: 5,
    kanji: "備える",
    reading: "そなえる",
    meaning: "mempersiapkan, melengkapi, menyediakan",
    sentence: "災害に備える。",
    sentenceReading: "さいがい に そなえる。",
    sentenceMeaning: "Mempersiapkan diri menghadapi bencana."
  },
  {
    part: 5,
    kanji: "昇る",
    reading: "のぼる",
    meaning: "naik, mendaki, meningkat, terbit",
    sentence: "太陽が昇る。",
    sentenceReading: "たいよう が のぼる。",
    sentenceMeaning: "Matahari terbit."
  },
  {
    part: 5,
    kanji: "務める",
    reading: "つとめる",
    meaning: "menjalankan tugas, bertugas sebagai, bekerja",
    sentence: "会社で営業を務める。",
    sentenceReading: "かいしゃ で えいぎょう を つとめる。",
    sentenceMeaning: "Bertugas di bagian penjualan perusahaan."
  },
  {
    part: 5,
    kanji: "積む",
    reading: "つむ",
    meaning: "menumpuk, memuat, mengumpulkan, menabung (pengalaman)",
    sentence: "経験を積むことが大事だ。",
    sentenceReading: "けいけん を つむ こと が だいじ だ。",
    sentenceMeaning: "Mengumpulkan pengalaman itu penting."
  },
  {
    part: 5,
    kanji: "任せる",
    reading: "まかせる",
    meaning: "mempercayakan, menyerahkan, membiarkan",
    sentence: "仕事を上司に任せた。",
    sentenceReading: "しごと を じょうし に まかせた。",
    sentenceMeaning: "Saya menyerahkan pekerjaan kepada atasan."
  },
  {
    part: 5,
    kanji: "焦る",
    reading: "あせる",
    meaning: "panik, tergesa-gesa, cemas",
    sentence: "時間がなくて焦った。",
    sentenceReading: "じかん が なくて あせった。",
    sentenceMeaning: "Saya panik karena waktunya sedikit."
  },
  {
    part: 5,
    kanji: "競う",
    reading: "きそう",
    meaning: "bersaing, berlomba, berkompetisi",
    sentence: "選手たちは優勝を競った。",
    sentenceReading: "せんしゅ たち は ゆうしょう を きそう た。",
    sentenceMeaning: "Para atlet bersaing untuk menang."
  },
  {
    part: 5,
    kanji: "傾く",
    reading: "かたむく",
    meaning: "miring, condong, menurun, runtuh (bisnis/negara)",
    sentence: "建物が傾いている。",
    sentenceReading: "たてもの が かたむいている。",
    sentenceMeaning: "Bangunan itu miring."
  },
  {
    part: 5,
    kanji: "縮める",
    reading: "ちぢめる",
    meaning: "memendekkan, mengecilkan, mengerutkan",
    sentence: "距離を縮める。",
    sentenceReading: "きょり を ちぢめる。",
    sentenceMeaning: "Memperpendek jarak."
  },
  {
    part: 5,
    kanji: "破れる",
    reading: "やぶれる",
    meaning: "robek, rusak, kalah, gagal",
    sentence: "紙が破れた。",
    sentenceReading: "かみ が やぶれた。",
    sentenceMeaning: "Kertasnya robek."
  },
  {
    part: 5,
    kanji: "除く",
    reading: "のぞく",
    meaning: "mengecualikan, menghilangkan, melihat sekilas",
    sentence: "一部の例を除く。",
    sentenceReading: "いちぶ の れい を のぞく。",
    sentenceMeaning: "Kecuali beberapa contoh."
  },
  {
    part: 5,
    kanji: "戻す",
    reading: "もどす",
    meaning: "mengembalikan, memulihkan, mengulang",
    sentence: "本を棚に戻す。",
    sentenceReading: "ほん を たな に もどす。",
    sentenceMeaning: "Mengembalikan buku ke rak."
  },
  {
    part: 5,
    kanji: "逆らう",
    reading: "さからう",
    meaning: "melawan, menentang, membangkang",
    sentence: "上司の命令に逆らう。",
    sentenceReading: "じょうし の めいれい に さからう。",
    sentenceMeaning: "Melawan perintah atasan."
  },
  {
    part: 5,
    kanji: "責める",
    reading: "せめる",
    meaning: "menyalahkan, menuduh, menekan",
    sentence: "彼を責めないでください。",
    sentenceReading: "かれ を せめない で ください。",
    sentenceMeaning: "Jangan menyalahkan dia."
  },
  {
    part: 5,
    kanji: "努める",
    reading: "つとめる",
    meaning: "berusaha keras, berupaya, mengusahakan",
    sentence: "最善を努める。",
    sentenceReading: "さいぜん を つとめる。",
    sentenceMeaning: "Berusaha sebaik mungkin."
  },
  {
    part: 5,
    kanji: "隠す",
    reading: "かくす",
    meaning: "menyembunyikan, menutupi",
    sentence: "秘密を隠す。",
    sentenceReading: "ひみつ を かくす。",
    sentenceMeaning: "Menyembunyikan rahasia."
  },
  {
    part: 5,
    kanji: "果たす",
    reading: "はたす",
    meaning: "menunaikan, mencapai, menyelesaikan",
    sentence: "使命を果たす。",
    sentenceReading: "しめい を はたす。",
    sentenceMeaning: "Menunaikan misi."
  },
  {
    part: 5,
    kanji: "削る",
    reading: "けずる",
    meaning: "mengikis, memotong, mengurangi",
    sentence: "予算を削る。",
    sentenceReading: "よさん を けずる。",
    sentenceMeaning: "Mengurangi anggaran."
  },
  {
    part: 5,
    kanji: "改める",
    reading: "あらためる",
    meaning: "memperbaiki, mengubah, meninjau kembali",
    sentence: "態度を改める。",
    sentenceReading: "たいど を あらためる。",
    sentenceMeaning: "Memperbaiki sikap."
  },
  {
    part: 6,
    kanji: "至る",
    reading: "いたる",
    meaning: "mencapai, sampai pada, berujung pada",
    sentence: "成功に至るまで努力した。",
    sentenceReading: "せいこう に いたる まで どりょく した。",
    sentenceMeaning: "Saya berusaha sampai berhasil."
  },
  {
    part: 6,
    kanji: "訪れる",
    reading: "おとずれる",
    meaning: "mengunjungi, datang (waktu/kejadian)",
    sentence: "春が訪れる。",
    sentenceReading: "はる が おとずれる。",
    sentenceMeaning: "Musim semi tiba."
  },
  {
    part: 6,
    kanji: "扱う",
    reading: "あつかう",
    meaning: "menangani, memperlakukan, mengelola, membahas",
    sentence: "この店では食品を丁寧に扱う。",
    sentenceReading: "この みせ で は しょくひん を ていねい に あつかう。",
    sentenceMeaning: "Di toko ini, mereka menangani makanan dengan hati-hati."
  },
  {
    part: 6,
    kanji: "導く",
    reading: "みちびく",
    meaning: "membimbing, memimpin, mengarahkan",
    sentence: "先生は学生を正しい道に導く。",
    sentenceReading: "せんせい は がくせい を ただしい みち に みちびく。",
    sentenceMeaning: "Guru membimbing siswa ke jalan yang benar."
  },
  {
    part: 6,
    kanji: "略す",
    reading: "りゃくす",
    meaning: "menyingkat, menghilangkan, melewati",
    sentence: "名前を略して呼ぶ。",
    sentenceReading: "なまえ を りゃくして よぶ。",
    sentenceMeaning: "Memanggil dengan nama singkat."
  },
  {
    part: 6,
    kanji: "占める",
    reading: "しめる",
    meaning: "menduduki, menempati, mengambil porsi",
    sentence: "女性が全体の半分を占める。",
    sentenceReading: "じょせい が ぜんたい の はんぶん を しめる。",
    sentenceMeaning: "Perempuan menempati setengah dari total."
  },
  {
    part: 6,
    kanji: "属する",
    reading: "ぞくする",
    meaning: "termasuk, tergolong, menjadi bagian dari",
    sentence: "彼はそのクラブに属している。",
    sentenceReading: "かれ は その クラブ に ぞくしている。",
    sentenceMeaning: "Dia termasuk dalam klub itu."
  },
  {
    part: 6,
    kanji: "与える",
    reading: "あたえる",
    meaning: "memberi, memberikan, menimbulkan (dampak)",
    sentence: "良い影響を与える。",
    sentenceReading: "よい えいきょう を あたえる。",
    sentenceMeaning: "Memberikan pengaruh yang baik."
  },
  {
    part: 6,
    kanji: "補う",
    reading: "おぎなう",
    meaning: "melengkapi, menutupi kekurangan",
    sentence: "不足を補う。",
    sentenceReading: "ふそく を おぎなう。",
    sentenceMeaning: "Menutupi kekurangan."
  },
  {
    part: 6,
    kanji: "誘う",
    reading: "さそう",
    meaning: "mengajak, membujuk, memancing",
    sentence: "友達を遊びに誘う。",
    sentenceReading: "ともだち を あそび に さそう。",
    sentenceMeaning: "Mengajak teman bermain."
  },
  {
    part: 6,
    kanji: "祝う",
    reading: "いわう",
    meaning: "merayakan, memberi selamat",
    sentence: "誕生日を祝う。",
    sentenceReading: "たんじょうび を いわう。",
    sentenceMeaning: "Merayakan ulang tahun."
  },
  {
    part: 6,
    kanji: "敗れる",
    reading: "やぶれる",
    meaning: "kalah, dikalahkan, gagal",
    sentence: "試合で敗れる。",
    sentenceReading: "しあい で やぶれる。",
    sentenceMeaning: "Kalah dalam pertandingan."
  },
  {
    part: 6,
    kanji: "頼る",
    reading: "たよる",
    meaning: "bergantung, mengandalkan",
    sentence: "親に頼る。",
    sentenceReading: "おや に たよる。",
    sentenceMeaning: "Bergantung pada orang tua."
  },
  {
    part: 6,
    kanji: "触れる",
    reading: "ふれる",
    meaning: "menyentuh, menyinggung, terkena",
    sentence: "触れると危険です。",
    sentenceReading: "ふれる と きけん です。",
    sentenceMeaning: "Berbahaya jika tersentuh."
  },
  {
    part: 6,
    kanji: "暮らす",
    reading: "くらす",
    meaning: "hidup, menjalani kehidupan",
    sentence: "都会で暮らす。",
    sentenceReading: "とかい で くらす。",
    sentenceMeaning: "Hidup di kota."
  },
  {
    part: 6,
    kanji: "拾う",
    reading: "ひろう",
    meaning: "mengambil, memungut",
    sentence: "道でゴミを拾う。",
    sentenceReading: "みち で ゴミ を ひろう。",
    sentenceMeaning: "Memungut sampah di jalan."
  },
  {
    part: 6,
    kanji: "絞る",
    reading: "しぼる",
    meaning: "memeras, memeras keringat, mempersempit",
    sentence: "情報を絞る。",
    sentenceReading: "じょうほう を しぼる。",
    sentenceMeaning: "Mempersempit informasi."
  },
  {
    part: 6,
    kanji: "握る",
    reading: "にぎる",
    meaning: "menggenggam, memegang, menguasai",
    sentence: "手を握る。",
    sentenceReading: "て を にぎる。",
    sentenceMeaning: "Menggenggam tangan."
  },
  {
    part: 6,
    kanji: "招く",
    reading: "まねく",
    meaning: "mengundang, mendatangkan",
    sentence: "友達をパーティーに招く。",
    sentenceReading: "ともだち を パーティー に まねく。",
    sentenceMeaning: "Mengundang teman ke pesta."
  },
  {
    part: 6,
    kanji: "散る",
    reading: "ちる",
    meaning: "gugur, berserakan, layu",
    sentence: "桜の花が散る。",
    sentenceReading: "さくら の はな が ちる。",
    sentenceMeaning: "Bunga sakura gugur."
  },
  {
    part: 6,
    kanji: "養う",
    reading: "やしなう",
    meaning: "memelihara, membesarkan, menafkahi, mengembangkan (kemampuan)",
    sentence: "子どもを養う。",
    sentenceReading: "こども を やしなう。",
    sentenceMeaning: "Memelihara anak."
  },
  {
    part: 6,
    kanji: "迷う",
    reading: "まよう",
    meaning: "bingung, ragu, tersesat, bimbang",
    sentence: "道に迷う。",
    sentenceReading: "みち に まよう。",
    sentenceMeaning: "Tersesat di jalan."
  },
  {
    part: 6,
    kanji: "抱える",
    reading: "かかえる",
    meaning: "memeluk, menanggung, memiliki (masalah/beban)",
    sentence: "問題を抱える。",
    sentenceReading: "もんだい を かかえる。",
    sentenceMeaning: "Menanggung masalah."
  },
  {
    part: 6,
    kanji: "驚かせる",
    reading: "おどろかせる",
    meaning: "mengejutkan, membuat terkejut",
    sentence: "友達を驚かせる。",
    sentenceReading: "ともだち を おどろかせる。",
    sentenceMeaning: "Mengejutkan teman."
  },
  {
    part: 6,
    kanji: "束ねる",
    reading: "たばねる",
    meaning: "mengikat jadi satu, mengelompokkan, menyatukan",
    sentence: "書類を束ねる。",
    sentenceReading: "しょるい を たばねる。",
    sentenceMeaning: "Mengikat dokumen menjadi satu."
  },
  {
    part: 6,
    kanji: "捨てる",
    reading: "すてる",
    meaning: "membuang, meninggalkan, melepaskan",
    sentence: "ゴミを捨てる。",
    sentenceReading: "ゴミ を すてる。",
    sentenceMeaning: "Membuang sampah."
  },
  {
    part: 6,
    kanji: "含める",
    reading: "ふくめる",
    meaning: "memasukkan, menyertakan, mengandung",
    sentence: "税金を含める。",
    sentenceReading: "ぜいきん を ふくめる。",
    sentenceMeaning: "Menyertakan pajak."
  },
  {
    part: 6,
    kanji: "映る",
    reading: "うつる",
    meaning: "terpantul, terlihat, terekam (kamera)",
    sentence: "鏡に映る。",
    sentenceReading: "かがみ に うつる。",
    sentenceMeaning: "Terpantul di cermin."
  },
  {
    part: 6,
    kanji: "見逃す",
    reading: "みのがす",
    meaning: "melewatkan, tidak menyadari, membiarkan lolos",
    sentence: "試合を見逃す。",
    sentenceReading: "しあい を みのがす。",
    sentenceMeaning: "Melewatkan pertandingan."
  },
  {
    part: 6,
    kanji: "湿る",
    reading: "しめる",
    meaning: "lembap, basah, menjadi lembap",
    sentence: "タオルが湿る。",
    sentenceReading: "タオル が しめる。",
    sentenceMeaning: "Handuk menjadi lembap."
  },
  {
    part: 6,
    kanji: "憎む",
    reading: "にくむ",
    meaning: "membenci, memusuhi",
    sentence: "彼を憎む。",
    sentenceReading: "かれ を にくむ。",
    sentenceMeaning: "Membenci dia."
  },
  {
    part: 6,
    kanji: "混じる",
    reading: "まじる",
    meaning: "bercampur, tercampur",
    sentence: "水に砂が混じる。",
    sentenceReading: "みず に すな が まじる。",
    sentenceMeaning: "Pasir tercampur dalam air."
  },
  {
    part: 6,
    kanji: "倒す",
    reading: "たおす",
    meaning: "menjatuhkan, menumbangkan, mengalahkan",
    sentence: "敵を倒す。",
    sentenceReading: "てき を たおす。",
    sentenceMeaning: "Mengalahkan musuh."
  },
  {
    part: 6,
    kanji: "従う",
    reading: "したがう",
    meaning: "mengikuti, menaati, mematuhi",
    sentence: "ルールに従う。",
    sentenceReading: "ルール に したがう。",
    sentenceMeaning: "Mengikuti aturan."
  },
  {
    part: 6,
    kanji: "迎える",
    reading: "むかえる",
    meaning: "menyambut, menjemput, menghadapi (waktu/kejadian)",
    sentence: "新しい年を迎える。",
    sentenceReading: "あたらしい とし を むかえる。",
    sentenceMeaning: "Menyambut tahun baru."
  },
  {
    part: 6,
    kanji: "絶えず",
    reading: "たえず",
    meaning: "terus-menerus, tanpa henti, selalu",
    sentence: "絶えず努力する。",
    sentenceReading: "たえず どりょく する。",
    sentenceMeaning: "Berusaha terus-menerus."
  },
  {
    part: 6,
    kanji: "絡まる",
    reading: "からまる",
    meaning: "terlilit, terjerat, kusut",
    sentence: "紐が絡まる。",
    sentenceReading: "ひも が からまる。",
    sentenceMeaning: "Tali terlilit."
  },
  {
    part: 6,
    kanji: "省く",
    reading: "はぶく",
    meaning: "menghilangkan, menyingkirkan, mengecualikan",
    sentence: "手間を省く。",
    sentenceReading: "てま を はぶく。",
    sentenceMeaning: "Menghilangkan pekerjaan yang tidak perlu."
  },
  {
    part: 6,
    kanji: "敬う",
    reading: "うやまう",
    meaning: "menghormati, menjunjung",
    sentence: "先輩を敬う。",
    sentenceReading: "せんぱい を うやまう。",
    sentenceMeaning: "Menghormati senior."
  },
  {
    part: 6,
    kanji: "乱れる",
    reading: "みだれる",
    meaning: "kacau, berantakan, tidak teratur",
    sentence: "風で髪が乱れる。",
    sentenceReading: "かぜ で かみ が みだれる。",
    sentenceMeaning: "Rambut berantakan karena angin."
  },
  {
    part: 7,
    kanji: "納める",
    reading: "おさめる",
    meaning: "membayar (pajak/iuran), menyerahkan, menyimpan, menenangkan",
    sentence: "税金を納める。",
    sentenceReading: "ぜいきん を おさめる。",
    sentenceMeaning: "Membayar pajak."
  },
  {
    part: 7,
    kanji: "伴う",
    reading: "ともなう",
    meaning: "menyertai, disertai, mengiringi",
    sentence: "危険を伴う仕事。",
    sentenceReading: "きけん を ともなう しごと。",
    sentenceMeaning: "Pekerjaan yang disertai risiko."
  },
  {
    part: 7,
    kanji: "焦げる",
    reading: "こげる",
    meaning: "hangus, gosong, terbakar",
    sentence: "パンが焦げる。",
    sentenceReading: "パン が こげる。",
    sentenceMeaning: "Roti menjadi gosong."
  },
  {
    part: 7,
    kanji: "劣る",
    reading: "おとる",
    meaning: "lebih rendah, kalah, kurang dibandingkan",
    sentence: "成績が他の生徒に劣る。",
    sentenceReading: "せいせき が ほか の せいと に おとる。",
    sentenceMeaning: "Nilai lebih rendah dari siswa lain."
  },
  {
    part: 7,
    kanji: "争う",
    reading: "あらそう",
    meaning: "bertengkar, bersaing, berkonflik",
    sentence: "土地を争う。",
    sentenceReading: "とち を あらそう。",
    sentenceMeaning: "Bertengkar soal tanah."
  },
  {
    part: 7,
    kanji: "囲む",
    reading: "かこむ",
    meaning: "mengelilingi, mengepung, mengitari",
    sentence: "テーブルを囲む。",
    sentenceReading: "テーブル を かこむ。",
    sentenceMeaning: "Mengelilingi meja."
  },
  {
    part: 7,
    kanji: "恵まれる",
    reading: "めぐまれる",
    meaning: "diberkahi, beruntung, mendapat anugerah",
    sentence: "恵まれた環境で育つ。",
    sentenceReading: "めぐまれた かんきょう で そだつ。",
    sentenceMeaning: "Tumbuh dalam lingkungan yang diberkahi."
  },
  {
    part: 7,
    kanji: "救う",
    reading: "すくう",
    meaning: "menyelamatkan, menolong",
    sentence: "命を救う。",
    sentenceReading: "いのち を すくう。",
    sentenceMeaning: "Menyelamatkan nyawa."
  },
  {
    part: 7,
    kanji: "凍る",
    reading: "こおる",
    meaning: "membeku, beku, dingin membeku",
    sentence: "川が凍る。",
    sentenceReading: "かわ が こおる。",
    sentenceMeaning: "Sungai membeku."
  }
];
