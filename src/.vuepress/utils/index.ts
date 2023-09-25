import { BlogStartDate } from './constant'
import { parseISO, intervalToDuration, formatDuration } from 'date-fns'

export function setDurationTime() {
    const $el = document.getElementById('blog-duration')
    if (!$el) return
    const start = parseISO(BlogStartDate)
    const end = new Date()
    const duration = intervalToDuration({ start, end })
    const unitMap = {
      years: '年',
      months: '个月',
      days: '天',
      hours: '小时',
      minutes: '分钟',
      seconds: '秒'
    }
    const durationArr: string[] = []
    Object.keys(duration).forEach((key: string) => {
      const value = duration[key as keyof Duration]
      if (value) {
        const unit = unitMap[key as keyof typeof unitMap]
        durationArr.push(value + unit)
      }
    })
    const durationText = durationArr.join(' ')
    $el.innerHTML = durationText
  }