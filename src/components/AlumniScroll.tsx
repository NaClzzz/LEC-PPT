import { useState } from 'react'

const allMembers: { grade: string; name: string; dest: string; type: string; qq?: string }[] = [
  { grade: '2025', name: '王硕', dest: '软件工程', type: '', qq: '3563745142' },
  { grade: '2025', name: '赵佳琦', dest: '物联网', type: '', qq: '3594513696' },
  { grade: '2025', name: '付豪', dest: '网络安全', type: '', qq: '2643673981' },
  { grade: '2025', name: '铉绍晖', dest: '软件工程', type: '', qq: '3338001408' },
  { grade: '2025', name: '代泽阳', dest: '软件工程', type: '', qq: '3371437652' },
  { grade: '2025', name: '朱俊豪', dest: '软件工程', type: '', qq: '1438644314' },
  { grade: '2025', name: '赵亦康', dest: '软件工程', type: '', qq: '2148809690' },
  { grade: '2025', name: '罗闽渝', dest: '软件工程', type: '', qq: '2145432672' },
  { grade: '2025', name: '黄禹霖', dest: '物联网', type: '', qq: '2543037355' },
  { grade: '2025', name: '林佳政', dest: '物联网', type: '', qq: '1661874625' },
  { grade: '2025', name: '汪美琳', dest: '物联网', type: '', qq: '1700930362' },

  { grade: '2024', name: '徐琦', dest: '', type: '', qq: '3029281534' },
  { grade: '2024', name: '曾权军', dest: '', type: '', qq: '543298913' },
  { grade: '2024', name: '龚云飞', dest: '', type: '', qq: '2308777176' },
  { grade: '2024', name: '宁靖阳', dest: '', type: '', qq: '3312584336' },
  { grade: '2024', name: '陈昱璋', dest: '', type: '', qq: '2844042601' },
  { grade: '2024', name: '霍奂鑫', dest: '', type: '', qq: '3814212388' },
  { grade: '2024', name: '郝华溢', dest: '', type: '', qq: '3134846106' },
  { grade: '2024', name: '邹梓熙', dest: '', type: '', qq: '2928781682' },
  { grade: '2024', name: '刘鸿春', dest: '', type: '', qq: '2991323733' },
  { grade: '2024', name: '匡思进', dest: '', type: '', qq: '3463239220' },
  { grade: '2024', name: '鲍怡君', dest: '', type: '', qq: '1906310787' },
  { grade: '2024', name: '唐韵梅', dest: '', type: '', qq: '1922287870' },

  { grade: '2023', name: '陈居浩', dest: '', type: '', qq: '1923185303' },
  { grade: '2023', name: '付泽东', dest: '', type: '', qq: '2069083570' },
  { grade: '2023', name: '黄茂', dest: '', type: '', qq: '2388522445' },
  { grade: '2023', name: '杨家瑶', dest: '', type: '', qq: '2138733925' },
  { grade: '2023', name: '邓艺琛', dest: '', type: '', qq: '1577587256' },
  { grade: '2023', name: '叶孜', dest: '', type: '', qq: '3034499136' },
  { grade: '2023', name: '肖鑫', dest: '', type: '', qq: '3255489560' },
  { grade: '2023', name: '郭鹤', dest: '', type: '', qq: '3551147139' },
  { grade: '2023', name: '孟令宇', dest: '', type: '', qq: '819978005' },
  { grade: '2023', name: '刁俊熙', dest: '', type: '', qq: '3169578920' },

  { grade: '2022', name: '隋炀', dest: '天津大学', type: '深造', qq: '' },
  { grade: '2022', name: '陈信豪', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2022', name: '杨东明', dest: '作业帮', type: '就业', qq: '' },
  { grade: '2022', name: '李焕然', dest: '成都互联网', type: '就业', qq: '' },
  { grade: '2022', name: '罗永霖', dest: '顺丰科技', type: '就业', qq: '' },
  { grade: '2022', name: '陈双彬', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2022', name: '杨博飞', dest: '美团', type: '就业', qq: '' },

  { grade: '2021', name: '赵泽熙', dest: '北京航空航天大学', type: '深造', qq: '' },
  { grade: '2021', name: '张歆予', dest: '电子科技大学', type: '深造', qq: '' },
  { grade: '2021', name: '周蕊', dest: '重庆大学', type: '深造', qq: '' },
  { grade: '2021', name: '王艺钢', dest: '电子科技大学', type: '深造', qq: '' },
  { grade: '2021', name: '谯星宇', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2021', name: '张皓然', dest: '滴滴', type: '就业', qq: '' },
  { grade: '2021', name: '任隽谦', dest: '非凸科技', type: '就业', qq: '' },
  { grade: '2021', name: '李亚文', dest: '美团', type: '就业', qq: '' },
  { grade: '2021', name: '宋遗平', dest: '百度', type: '就业', qq: '' },
  { grade: '2021', name: '蒲俊彦', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2021', name: '毛逸飞', dest: '东方电气', type: '就业', qq: '' },

  { grade: '2020', name: '赵耀东', dest: '电子科技大学', type: '深造', qq: '' },
  { grade: '2020', name: '何锦涛', dest: '中国地质大学（武汉）', type: '深造', qq: '' },
  { grade: '2020', name: '孙钰镒', dest: '昆士兰大学', type: '深造', qq: '' },
  { grade: '2020', name: '沈俞佑', dest: '阿里巴巴', type: '就业', qq: '' },
  { grade: '2020', name: '潘佳豪', dest: '阿里巴巴', type: '就业', qq: '' },
  { grade: '2020', name: '石一峰', dest: '华为', type: '就业', qq: '' },
  { grade: '2020', name: '李航舟', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2020', name: '袁云飞', dest: '中国铁路', type: '就业', qq: '' },
  { grade: '2020', name: '张新云', dest: '小米', type: '就业', qq: '' },

  { grade: '2019', name: '刘洪堃', dest: '电子科技大学', type: '深造', qq: '' },
  { grade: '2019', name: '岳筱涵', dest: '华东师范大学', type: '深造', qq: '' },
  { grade: '2019', name: '曹志鹏', dest: '华盛顿大学', type: '深造', qq: '' },
  { grade: '2019', name: '黎达', dest: '深圳大学', type: '深造', qq: '' },
  { grade: '2019', name: '蒋曾慧', dest: '苏州大学', type: '深造', qq: '' },
  { grade: '2019', name: '赵千', dest: '电子科技大学', type: '深造', qq: '' },
  { grade: '2019', name: '赵宇', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2019', name: '徐燕', dest: '拼多多', type: '就业', qq: '' },
  { grade: '2019', name: '廖小菊', dest: '携程', type: '就业', qq: '' },
  { grade: '2019', name: '姜自友', dest: '快手', type: '就业', qq: '' },
  { grade: '2019', name: '朱珂江', dest: '美团', type: '就业', qq: '' },
  { grade: '2019', name: '贺邈婵', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2019', name: '王萌', dest: '字节跳动', type: '就业', qq: '' },
  { grade: '2019', name: '叶尤晟', dest: '美团', type: '就业', qq: '' },
]

const gradeLabels = ['2025', '2024', '2023', '2022', '2021', '2020', '2019']

export default function AlumniScroll() {
  const [activeGrade, setActiveGrade] = useState('2025')

  const filtered = allMembers.filter(m => m.grade === activeGrade)

  return (
    <div className="flex h-[680px] flex-col rounded-2xl border border-gray-200/60 bg-white/60 p-6 md:p-8">
      <h3 className="mb-4 text-xl font-bold tracking-[-0.02em] text-gray-900">
        全部成员
      </h3>
      <div className="mb-6 flex flex-wrap gap-4 border-b border-gray-200 pb-3">
        {gradeLabels.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGrade(g)}
            data-hover-scale
            className={`font-misans-light text-sm tracking-[0.08em] pb-1 transition-colors ${activeGrade === g ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {g}级
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 content-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <div key={m.name} className="relative flex items-center gap-4 rounded-lg border border-gray-100 bg-gray-50 px-5 h-20">
            {m.type && (
              <span className={`absolute top-1.5 right-2 rounded px-1 text-[0.6rem] ${m.type === '深造' ? 'bg-violet-500/10 text-violet-500' : 'bg-accent/10 text-accent'}`}>{m.type}</span>
            )}
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-base font-semibold text-accent overflow-hidden">
              {m.qq ? (
                <img src={`http://q1.qlogo.cn/g?b=qq&nk=${m.qq}&s=100`} alt="" className="h-full w-full object-cover" />
              ) : (
                m.name[0]
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-base font-semibold text-gray-800">{m.name}</div>
              <div className="truncate font-misans-light text-sm text-gray-400">{m.dest}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
