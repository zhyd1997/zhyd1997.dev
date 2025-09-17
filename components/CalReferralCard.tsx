import Link from './Link'

const REFERRAL_URL = 'https://dub.sh/deel-cn'

export default function CalReferralCard() {
  return (
    <div className="mt-4 rounded-md border-2 border-gray-200 border-opacity-60 p-6 dark:border-gray-700">
      <h3 className="mb-2 mt-2 text-xl font-semibold tracking-tight">Building a global team?</h3>
      <p className="mb-0 text-gray-600 dark:text-gray-300">
        Join Deel to hire in 150 countries in minutes without worrying about local laws, opening a new entity, or managing international payroll.
        <br />
        <br />
      </p>

      <Link
        href={REFERRAL_URL}
        aria-label="Deel referral link to hire globally"
        className="inline-flex items-center gap-2 rounded bg-purple-500 px-4 py-2 font-medium !text-white hover:bg-purple-600 dark:hover:bg-purple-400"
      >
        Try Deel →
      </Link>

      <h3 className="mb-2 mt-8 text-xl font-semibold tracking-tight">Want to hire Chinese Developers via Deel?</h3>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        If you're open to hiring Chinese developers (1,000k+ in my network; Some of them are former Microsoft/Citibank engineers),
        you can get a few discounts by contacting me.
      </p>
    </div>
  )
}


