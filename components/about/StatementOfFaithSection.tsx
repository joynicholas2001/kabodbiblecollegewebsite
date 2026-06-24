"use client";

import { BookOpen } from "lucide-react";

export default function StatementOfFaithSection() {
  const statementPoints = [
    {
      id: 1,
      text: "The Bible is the inspired Word of God and the revealed will of God (2 Timothy 3:15-17; 1 Peter 1:23-25; Hebrews 4:12) and hence hold the Bible as the supreme authority in all matters of faith and conduct.",
    },
    {
      id: 2,
      text: "There is one true God who eternally exists in three Persons—the Father, Son and the Holy Spirit. All are co-equal and co-eternal (Matthew 28:19; 1 John 5:7).",
    },
    {
      id: 3,
      text: "Jesus Christ, God manifest in the flesh, is the only begotten Son of God, and God the Son from eternity (Isaiah 9:6; John 1:1,14). We believe in His virgin birth, sinless life, atoning death and bodily resurrection, in His ascension to the Father, and in His personal return in power and glory.",
    },
    {
      id: 4,
      text: "Man was created in God’s image. By voluntary transgression he fell and his only hope of redemption is in Jesus Christ, the Son of God (Genesis 1:26-31, 3:1-7; Romans 5:12-21)",
    },
    {
      id: 5,
      text: "Salvation of man:\na. Man’s only hope of redemption is through the shed blood of Jesus Christ. On the cross Jesus Christ became sin and sickness providing both salvation and healing for all mankind (Psalm 103:3). This salvation comes by believing in your heart that God raised Jesus from the dead and confessing with your mouth, Jesus as Lord (Romans 3:24, 10:8-10; Ephesians 2:8).\nb. The inward evidence, to the believer, is the direct witness of the Spirit (Romans 8:16). The outward evidence to all men is a life of true holiness and love (1 John 3:23; John 13:35).\nc. Salvation is by faith in Jesus Christ and not by human works; however our works are evidence of our faith and will determine our rewards in eternity (Acts 16:3; Romans 10:9,10; 14:10-12; 2 Corinthians 5:10; Ephesians 2:8,9; Titus 3:5-7; James 2:18).",
    },
    {
      id: 6,
      text: "Baptism in water and the Lord’s Supper are the only sacraments of the Church. Baptism in water is a declaration to the world that a believer has died with Christ and that they have been raised with Him to walk in newness of life (Matthew 28:19; Acts 10:47,48; Romans 6:4). The celebration of the Lord’s Supper by eating of the bread and drinking of the cup is a remembrance of Jesus (1 Corinthians 11:24-30).",
    },
    {
      id: 7,
      text: "The Holy Spirit, the third Person of the Godhead, dwells in every believer. The Holy Spirit is at work in and through the believer as evidenced through the fruit of the Spirit (Galatians 5:22,23) and the gifts of the Spirit (1 Corinthians 12:7-11).",
    },
    {
      id: 8,
      text: "All believers are entitled to, and should ardently expect and earnestly seek, the promise of the Father, the Baptism of the Holy Spirit, according to the command of Jesus Christ. With this comes the endowment of power for life and service, the bestowment of gifts and their uses in the work of the ministry: This experience is distinct from and subsequent to the experience of the new birth but can occur at the same moment a person is reborn (Luke 24:49; Acts 1:4-8, 2:38,39, 10:44-46, 11:14-16, 15:7-9; 1 Corinthians 12:1-31).",
    },
    {
      id: 9,
      text: "The Church is the Body of Christ. Each believer is an integral part (Ephesians 1:22, 2:19-22; Hebrews 12:23) of Christ’s Body—the Church. God has a definite function for each believer in the Church (Romans 12:6-12). Some are called to stand in one or more of the five-fold ministry office (Ephesians 4:7-11). The local church is an integral part of Christ’s Body. As each believer fulfils their calling, within the local church and outside, they will fulfill their God-ordained function in the Body of Christ.",
    },
    {
      id: 10,
      text: "God’s will is the wellbeing of the total person.\na. Spiritual (John 3:3,11; 2 Corinthians 5:17-21; Romans 10:9,10)\nb. Mental (2 Timothy 1:7; Romans 12:1; Isaiah 26:3)\nc. Physical (Isaiah 53:4,5; Matthew 8:17; 1 Peter 2:24)\nd. Financial (III John 1:2; Malachi 3:10-11; Luke 6:38; 2 Corinthians. 9:6-10)\ne. Social (Proverbs 3:4)",
    },
    {
      id: 11,
      text: "Every believer should be actively involved in fulfilling the Great Commission of preaching the Gospel and making disciples of all nations (Mark 16:15; Matthew 28:18-20).",
    },
    {
      id: 12,
      text: "Jesus is coming again to gather all His Saints to heaven (1 Corinthians 15:51,52; 1 Thessalonians 4:16,17; 2 Thessalonians 2:1). Those who have not accepted the redemptive work of Jesus Christ will suffer eternal separation from God (Revelation 19:20, 20:10-15).",
    },
    {
      id: 13,
      text: "The Lord Jesus Christ will return with His saints from heaven to rule and reign for one thousand years on earth as the Scripture promised (Romans 11:25,27; 2 Thessalonians 1:7; Revelation 19:11-16, 20:1-7). After this, there will be a new heaven and a new earth (Revelation 21).",
    },
  ];

  return (
    <section className="bg-brand-light py-16 sm:py-24 border-t border-brand-card">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-brand-gold/20 p-4 rounded-2xl">
              <BookOpen className="h-10 w-10 text-brand-gold" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-purple mb-6">
            Statement of Faith
          </h2>
          <div className="space-y-4 text-lg text-brand-muted max-w-2xl mx-auto">
            <p className="font-semibold text-brand-purple-dark text-xl">
              What we believe, live by, preach and teach
            </p>
            <p>
              Your convictions determine your choices, your life and destiny.
              Let God&apos;s Word define and sustain your convictions.
            </p>
            <p className="pt-4 border-t border-brand-card">
              <span className="font-semibold">Tenets of Faith and Doctrine</span>
              <br />
              KBC accepts the Scriptures as the revealed will of God, and adopts
              these statements of fundamental truths and doctrines.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {statementPoints.map((point, index) => (
            <div
              key={point.id}
              className="bg-brand-card/35 p-6 sm:p-8 rounded-2xl shadow-card border border-brand-card flex gap-4 sm:gap-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple font-bold font-heading">
                  {point.id}
                </div>
              </div>
              <div className="flex-1 text-brand-muted leading-relaxed text-base sm:text-lg">
                {point.text.split("\n").map((line, i) => (
                  <p key={i} className={i > 0 ? "mt-3 pl-4 sm:pl-6 border-l-2 border-brand-gold/30" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
