
# Annotation Guidelines

## Intent Classification
- Refund Request: User explicitly asks for refund.
- Complaint: Express dissatisfaction without explicit action.
- Delivery Issue: Tracking, missing or delayed delivery.
- Payment Failure: Payment errors or deductions.
- Account Help: Login, password, or account access issues.
- Positive Feedback: Praise or satisfaction.
- Cancel Order: Explicit cancellation request.

## Sentiment Labeling
- Positive: Appreciation or satisfaction.
- Negative: Complaint, frustration, or problem.
- Neutral: Informational requests.

## Entity Extraction
- Order ID: Detect patterns like ORD1234.
- Product: Mention of specific item.
- Payment: Card, transaction, or billing reference.

## Edge Cases
- Mixed sentiment → label Mixed.
- Unclear intent → mark as Query.
