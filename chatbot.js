(function () {
  var cfg = {
    webhookUrl: "https://n8n.srv1662153.hstgr.cloud/webhook/bb5b0f9e-6960-4081-afb3-5e418c7b6f2e/chat",
    companyName: "BM Estate",
    welcomeMessage: "Hello! Welcome to BM Estate. How can I help you today?",
    inputPlaceholder: "Type your message...",
    launcherLabel: "Chat",
    fontSize: 14,
    fontFamily: "Inter, Segoe UI, sans-serif",
    launcherSize: 68,
    launcherRadius: 20,
    widgetRadius: 22,
    lineHeight: 1.6,
    position: "right",
    bottom: "28px",
    autoOpen: false,
    colors: {
      brandA: "#1973d7",
      userBubble: "rgb(25, 115, 215)",
      botBubble: "#f0f0f7",
      botText: "#1a1a2e"
    },
    logo: "https://www.bmestates.com/content/images/logo-footer-20y.png",
    quickReplies: []
  };

  var root = document.getElementById('lk-chat');
  if (!root) {
    root = document.createElement('div');
    root.id = 'lk-chat';
    document.body.appendChild(root);
  }

  if (!document.getElementById('lk-styles')) {
    var style = document.createElement('style');
    style.id = 'lk-styles';
    style.textContent = [
      '@keyframes lkPulse{0%,100%{opacity:1;box-shadow:0 0 6px 2px #22c55e;}50%{opacity:.4;box-shadow:0 0 3px 1px #22c55e;}}',
      '@keyframes lkTypingEnter{0%{opacity:0;transform:translateY(10px) scale(.96);}100%{opacity:1;transform:translateY(0) scale(1);}}',
      '@keyframes lkTypingBubble{0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(-2px) scale(1.01);}}',
      '@keyframes lkTypingDot{0%,60%,100%{transform:translateY(0) scale(.88);opacity:.35;}30%{transform:translateY(-6px) scale(1);opacity:1;}}',
      '.lk-bubble-user,.lk-bubble-bot{white-space:pre-wrap;word-break:break-word;}',
      '.lk-bubble-user strong,.lk-bubble-bot strong{font-weight:700;color:inherit;}',
      '.lk-bubble-user{font-weight:500;}',
      '.lk-bubble-bot p{margin:0 0 8px 0;}',
      '.lk-bubble-bot p:last-child{margin-bottom:0;}',
      '.lk-bubble-bot ul{margin:8px 0;padding-left:18px;}',
      '.lk-bubble-bot li{margin:5px 0;line-height:1.5;}',
      '.lk-bubble-bot a{color:#1973d7;text-decoration:underline;}',
      '.lk-bubble-bot img{display:block;max-width:100%;height:auto;max-height:220px;object-fit:cover;border-radius:10px;margin:8px 0 0;background:#e8e8f4;}',
      '.lk-typing-row{display:flex;justify-content:flex-start;align-items:flex-end;padding-left:2px;animation:lkTypingEnter .24s ease-out both;}',
      '.lk-typing-bubble{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:76px;min-height:50px;padding:14px 18px;border-radius:18px 18px 18px 6px;background:linear-gradient(135deg,#f7f8ff 0%,#e8ebf8 100%);box-shadow:0 10px 24px rgba(25,115,215,.08);animation:lkTypingBubble 1.6s ease-in-out infinite;will-change:transform;}',
      '.lk-typing-bubble::after{content:"";position:absolute;left:11px;bottom:-4px;width:14px;height:14px;background:#e8ebf8;border-radius:0 0 6px 12px;transform:rotate(26deg);}',
      '.lk-typing-dots{position:relative;z-index:1;display:inline-flex;align-items:flex-end;gap:7px;}',
      '.lk-dot{width:9px;height:9px;border-radius:50%;background:#1973d7;display:inline-block;opacity:.35;transform-origin:center bottom;animation:lkTypingDot 1.25s ease-in-out infinite;}',
      '.lk-dot:nth-child(2){animation-delay:.18s;}',
      '.lk-dot:nth-child(3){animation-delay:.36s;}',
      '.lk-pills-wrap{padding:10px 12px 12px;background:#fff;border-bottom:2px solid rgba(25,115,215,.18);flex-shrink:0;}',
      '.lk-pills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}',
      '.lk-pill{border:1.5px solid #1973d7;background:#1973d7;color:#fff;border-radius:999px;padding:7px 4px;cursor:pointer;font-size:11px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;transition:background .15s,transform .1s;line-height:1.3;box-sizing:border-box;}',
      '.lk-pill:hover{background:#155fb8;transform:translateY(-1px);}',
      '.lk-pill:active{transform:translateY(0);}',
      '.lk-props-scroll{display:flex;gap:12px;overflow-x:auto;padding:4px 2px 10px;scrollbar-width:thin;scrollbar-color:#c5c3ee transparent;}',
      '.lk-props-scroll::-webkit-scrollbar{height:4px;}',
      '.lk-props-scroll::-webkit-scrollbar-thumb{background:#c5c3ee;border-radius:4px;}',
      '.lk-prop-card{min-width:218px;max-width:218px;border-radius:14px;overflow:hidden;background:#fff;border:1px solid rgba(25,115,215,.18);flex-shrink:0;box-shadow:0 2px 10px rgba(0,0,0,.07);}',
      '.lk-prop-img{width:100%;height:112px;object-fit:cover;display:block;background:#e8e8f4;}',
      '.lk-prop-img-ph{width:100%;height:112px;background:#e8e7f8;display:flex;align-items:center;justify-content:center;font-size:28px;}',
      '.lk-prop-body{padding:10px 10px 11px;}',
      '.lk-prop-title{font-weight:700;font-size:13px;color:#1a1a2e;margin:0 0 3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
      '.lk-prop-loc{font-size:11px;color:#666;margin:0 0 6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
      '.lk-prop-price{font-size:14px;font-weight:700;color:#1973d7;margin:0 0 8px;}',
      '.lk-prop-tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;}',
      '.lk-prop-tag{font-size:10px;background:#f0f0f7;color:#1973d7;border-radius:999px;padding:2px 8px;font-weight:600;}',
      '.lk-prop-btn{display:block;width:100%;box-sizing:border-box;padding:7px 0;border:none;border-radius:8px;background:#1973d7;color:#fff;font-size:12px;font-weight:600;cursor:pointer;text-align:center;}',
      '.lk-det{max-width:320px;border-radius:16px;overflow:hidden;background:#fff;border:1px solid rgba(25,115,215,.2);box-shadow:0 4px 16px rgba(0,0,0,.1);margin-bottom:4px;transition:opacity 0.35s ease;}',
      '.lk-det-hero{width:100%;height:200px;object-fit:cover;display:block;}',
      '.lk-det-body{padding:14px 16px 16px;}',
      '.lk-det-title{font-size:16px;font-weight:700;color:#1a1a2e;margin:0 0 4px;}',
      '.lk-det-loc{font-size:12px;color:#666;margin:0 0 10px;}',
      '.lk-det-price{font-size:20px;font-weight:700;color:#1973d7;margin:0 0 12px;}',
      '.lk-det-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;}',
      '.lk-det-cell{background:#f0f0f7;border-radius:10px;padding:8px 10px;}',
      '.lk-det-lbl{font-size:11px;color:#888;margin-bottom:2px;}',
      '.lk-det-val{font-size:13px;font-weight:600;color:#1a1a2e;}',
      '.lk-det-desc{font-size:13px;color:#444;line-height:1.6;margin-bottom:14px;}',
      '.lk-det-btns{display:flex;gap:8px;}',
      '.lk-det-book{flex:1;padding:10px 0;border:none;border-radius:10px;background:#1973d7;color:#fff;font-size:13px;font-weight:600;cursor:pointer;}',
      '.lk-det-ext{padding:10px 14px;border:1.5px solid #1973d7;border-radius:10px;background:transparent;color:#1973d7;font-size:13px;font-weight:600;cursor:pointer;}'
    ].join('');
    document.head.appendChild(style);
  }

  var state = {
    open: !!cfg.autoOpen,
    sessionId: 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10),
    messages: [{ id: 1, text: cfg.welcomeMessage, user: false, time: new Date() }]
  };

  function css(el, styles) {
    Object.keys(styles).forEach(function (k) { el.style[k] = styles[k]; });
    return el;
  }

  function animateBubble(bubble, isUser) {
    var start = performance.now();
    var duration = 400;
    function frame(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      bubble.style.opacity = eased;
      if (isUser) {
        bubble.style.transform = 'translateY(' + (15 * (1 - eased)) + 'px)';
      } else {
        var bounce = Math.sin(progress * Math.PI) * (1 - progress) * 5;
        var scale = 0.9 + 0.1 * eased;
        bubble.style.transform = 'translateY(' + (15 * (1 - eased) - bounce).toFixed(1) + 'px) scale(' + scale.toFixed(2) + ')';
      }
      if (progress < 1) { requestAnimationFrame(frame); }
      else { bubble.style.opacity = '1'; bubble.style.transform = 'none'; }
    }
    requestAnimationFrame(frame);
  }

  function parseJson(raw) {
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { }
    var stripped = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
    try { return JSON.parse(stripped); } catch (e) { }
    var m = stripped.match(/(\{[\s\S]*\})/);
    if (m) { try { return JSON.parse(m[1]); } catch (e) { } }
    return null;
  }

  function pick() {
    for (var i = 0; i < arguments.length; i++) {
      var v = arguments[i];
      if (typeof v === 'string' && v.trim()) return v.trim();
      if (typeof v === 'number' && isFinite(v)) return String(v);
    }
    return '';
  }

  function formatText(text) {
    if (!text) return text;
    text = text.replace(/\\r\\n|\\r|\\n/g, '\n');
    text = text.replace(/\r\n|\r/g, '\n');
    text = text.replace(/\n{3,}/g, '\n\n');
    return text.trim();
  }

  function coerceProperties(rawProps) {
    if (Array.isArray(rawProps)) return rawProps;
    if (typeof rawProps === 'string') {
      var parsed = parseJson(rawProps);
      if (Array.isArray(parsed)) return parsed;
      if (parsed && typeof parsed === 'object') {
        var nested = parsed.properties || parsed.listings || parsed.results || parsed.property_results || null;
        if (Array.isArray(nested)) return nested;
      }
    } else if (rawProps && typeof rawProps === 'object') {
      var nestedObj = rawProps.properties || rawProps.listings || rawProps.results || rawProps.property_results || null;
      if (Array.isArray(nestedObj)) return nestedObj;
    }
    return null;
  }

  function extractPropertiesFromMessage(message) {
    if (!message) return null;
    var lines = String(message).split('\n');
    var found = [];
    var current = null;

    function cleanName(rawName) {
      return String(rawName || '')
        .replace(/^\d+\.\s*/, '')
        .replace(/^[-*]\s*/, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
    }

    function applyDetails(target, detailsLine) {
      if (!target || !detailsLine) return;
      var line = String(detailsLine).trim().replace(/^[-*]\s*/, '');
      var priceLabelMatch = line.match(/^price\s*:\s*(.+)$/i);
      if (priceLabelMatch && priceLabelMatch[1]) {
        target.price = String(priceLabelMatch[1]).replace(/\s+/g, ' ').trim();
      } else {
        var priceMatch = line.match(/(?:\u00A3|£|\$|€|Â£|\?)?\s*[\d,]+(?:\s*(?:pcm|pa))?/i);
        if (priceMatch && priceMatch[0] && /\d/.test(priceMatch[0])) {
          target.price = priceMatch[0].replace(/\s+/g, ' ').trim();
        }
      }
      var locationLabelMatch = line.match(/^location\s*:\s*(.+)$/i);
      if (locationLabelMatch && locationLabelMatch[1]) {
        target.location = String(locationLabelMatch[1]).replace(/\s+/g, ' ').trim().toUpperCase();
      }
      var postcodeMatch = line.match(/postcode\s*:\s*([A-Z]{1,2}\d[A-Z\d]?(?:\s*\d[A-Z]{2})?)/i);
      if (postcodeMatch && postcodeMatch[1]) target.location = postcodeMatch[1].replace(/\s+/g, ' ').trim().toUpperCase();
      var shortLeMatch = line.match(/\b(LE\d{1,2})\b/i);
      if (!target.location && shortLeMatch && shortLeMatch[1]) target.location = shortLeMatch[1].toUpperCase();
      var bedroomsMatch = line.match(/(\d+)\s*bedroom/i);
      if (bedroomsMatch && bedroomsMatch[1]) target.bedrooms = Number(bedroomsMatch[1]);
      var viewMatch = line.match(/\[View Property\]\(([^)]+)\)/i);
      if (viewMatch && viewMatch[1]) target.url = String(viewMatch[1]).trim();
      var mdImgMatch = line.match(/!\[[^\]]*\]\(([^)]+)\)/i);
      if (mdImgMatch && mdImgMatch[1]) target.imageUrl = String(mdImgMatch[1]).trim();
      var htmlImgMatch = line.match(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/i);
      if (htmlImgMatch && htmlImgMatch[1]) target.imageUrl = String(htmlImgMatch[1]).replace(/&amp;/g, '&').trim();
    }

    function pushCurrent() {
      if (!current) return;
      if (current.name && (current.price || current.location || current.imageUrl || current.url || current.bedrooms)) {
        found.push(current);
      }
      current = null;
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].replace(/\*\*/g, '').trim();
      if (!line) continue;

      if (/^which of these properties/i.test(line)) {
        pushCurrent();
        continue;
      }

      var inlineItem = line.match(/^([A-Za-z0-9'&().,\- ]{3,})\s*-\s*(.+)$/);
      if (inlineItem) {
        var inlineName = cleanName(inlineItem[1]);
        var inlineDetails = String(inlineItem[2] || '').trim();
        if (inlineName && /(bedroom|price|pcm|pa|postcode|le\d)/i.test(inlineDetails)) {
          pushCurrent();
          current = { name: inlineName };
          applyDetails(current, inlineDetails);
          pushCurrent();
          continue;
        }
      }

      var nameLike =
        /(?:road|street|avenue|close|drive|lane|way|crescent|gardens|court|place|terrace|boulevard|row|park|hill|view)\b/i.test(line) ||
        /,\s*LE\d{1,2}\b/i.test(line);
      var notDetailLine = !/^(price|location|postcode|bedrooms?|bathrooms?|status)\s*:/i.test(line) && !/^<img\b/i.test(line) && !/^!\[/.test(line);
      if (nameLike && notDetailLine) {
        pushCurrent();
        current = { name: cleanName(line) };
        continue;
      }

      if (current) {
        applyDetails(current, line);
      }
    }

    pushCurrent();
    return found.length ? found : null;
  }

  function hasValue(value) {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    return true;
  }

  function normalizeLocationToken(prop) {
    if (!prop || typeof prop !== 'object') return '';
    var raw = pick(prop.postcode, prop.location, prop.area, prop.city, prop.address);
    if (!raw) return '';
    return String(raw).toUpperCase().replace(/\s+/g, '');
  }

  function mergePropertyLists(primaryList, parsedList) {
    var primary = Array.isArray(primaryList) ? primaryList : [];
    var parsed = Array.isArray(parsedList) ? parsedList : [];
    if (!parsed.length) return primary.length ? primary : null;
    if (!primary.length) return parsed;

    var usedParsed = {};
    var merged = [];

    function findParsedIndex(baseItem, preferredIndex) {
      if (preferredIndex >= 0 && preferredIndex < parsed.length && !usedParsed[preferredIndex]) {
        return preferredIndex;
      }
      var token = normalizeLocationToken(baseItem);
      if (token) {
        for (var j = 0; j < parsed.length; j++) {
          if (usedParsed[j]) continue;
          if (normalizeLocationToken(parsed[j]) === token) return j;
        }
      }
      for (var k = 0; k < parsed.length; k++) {
        if (!usedParsed[k]) return k;
      }
      return -1;
    }

    for (var i = 0; i < primary.length; i++) {
      var baseItem = (primary[i] && typeof primary[i] === 'object') ? primary[i] : {};
      var parsedIndex = findParsedIndex(baseItem, i);
      var parsedItem = (parsedIndex >= 0 && parsed[parsedIndex] && typeof parsed[parsedIndex] === 'object') ? parsed[parsedIndex] : null;
      if (parsedIndex >= 0) usedParsed[parsedIndex] = true;

      var out = Object.assign({}, baseItem);
      if (parsedItem) {
        Object.keys(parsedItem).forEach(function (key) {
          if (!hasValue(out[key]) && hasValue(parsedItem[key])) {
            out[key] = parsedItem[key];
          }
        });
        if (!hasValue(out.name)) out.name = pick(parsedItem.name, parsedItem.title, parsedItem.address);
        if (!hasValue(out.title)) out.title = pick(parsedItem.title, parsedItem.name, parsedItem.address);
        if (!hasValue(out.price)) out.price = pick(parsedItem.price, parsedItem.rent, parsedItem.cost);
        if (!hasValue(out.location)) out.location = pick(parsedItem.location, parsedItem.postcode, parsedItem.area, parsedItem.city);
        if (!hasValue(out.imageUrl)) out.imageUrl = pick(parsedItem.imageUrl, parsedItem.image, parsedItem.photo, parsedItem.thumbnail);
        if (!hasValue(out.url)) out.url = pick(parsedItem.url, parsedItem.link, parsedItem.propertyUrl, parsedItem.property_url);
      }
      merged.push(out);
    }

    for (var p = 0; p < parsed.length; p++) {
      if (!usedParsed[p]) merged.push(parsed[p]);
    }

    return merged.length ? merged : null;
  }

  function parseWebhook(raw) {
    var fallback = 'Thanks for your message.';
    var text = (raw || '').trim();
    text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
    var r = parseJson(text);
    if (!r) {
      var lt = text.toLowerCase();
      if (lt.indexOf('error') !== -1 && (lt.indexOf('workflow') !== -1 || lt.indexOf('n8n') !== -1 || lt.indexOf('code') !== -1 || lt.indexOf('issue') !== -1)) {
        return { message: 'Sorry, something went wrong. Please try again.' };
      }
      var plainMsg = formatText(text) || fallback;
      return { message: plainMsg, properties: extractPropertiesFromMessage(plainMsg) };
    }
    if (Array.isArray(r)) { r = r[0] || {}; }
    if (typeof r !== 'object') return { message: fallback };
    var node = r;
    for (var depth = 0; depth < 2; depth++) {
      if (Object.prototype.hasOwnProperty.call(node, 'output')) {
        var out = node.output;
        if (Array.isArray(out)) { out = out[0] || {}; }
        if (typeof out === 'string') { var n2 = parseJson(out); node = (n2 && typeof n2 === 'object') ? n2 : { message: out }; }
        else if (out && typeof out === 'object') { node = out; }
        else break;
      } else break;
    }
    var properties = coerceProperties(node.properties || node.listings || node.results || node.property_results || null);
    var msg = pick(node.message, node.response, node.reply, node.text, node.output);
    if (!msg && !properties) return { message: fallback };
    var lm = (msg || '').toLowerCase();
    if (lm.indexOf('error') !== -1 && (lm.indexOf('workflow') !== -1 || lm.indexOf('n8n') !== -1)) {
      return { message: 'Sorry, something went wrong. Please try again.' };
    }
    var finalMsg = formatText(msg) || (properties && properties.length ? 'Here are properties for you:' : fallback);
    var parsedPropsFromMessage = extractPropertiesFromMessage(finalMsg);
    properties = mergePropertyLists(properties, parsedPropsFromMessage);
    return {
      message: finalMsg,
      properties: Array.isArray(properties) && properties.length ? properties : null
    };
  }

  function parseMarkdown(text) {
    function escapeHtml(s) {
      return String(s || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function getSafeUrl(rawUrl) {
      if (!rawUrl) return '';
      var s = String(rawUrl).trim();
      if (!s) return '';
      if (s.startsWith('//')) s = 'https:' + s;
      return /^https?:\/\//i.test(s) ? s : '';
    }

    function screenshotForPage(pageUrl) {
      var safe = getSafeUrl(pageUrl);
      if (!safe) return '';
      return 'https://image.thum.io/get/width/720/noanimate/' + safe;
    }

    function getImageUrl(rawUrl, fallbackPageUrl) {
      var safe = getSafeUrl(rawUrl);
      if (!safe) return '';
      var lower = safe.toLowerCase();
      if (lower.indexOf('72.61.147.184:8089/images/') !== -1 || lower.startsWith('http://')) {
        var shot = screenshotForPage(fallbackPageUrl);
        if (shot) return shot;
        if (lower.indexOf('72.61.147.184:8089/images/') !== -1) return getDefaultPropertyImage();
      }
      if (lower.startsWith('http://')) return 'https://' + safe.slice('http://'.length);
      return safe;
    }

    function renderInline(line, fallbackPageUrl) {
      var rawLine = String(line || '').trim();
      var rawImgMatch = rawLine.match(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/i);
      if (rawImgMatch && rawImgMatch[1]) {
        var rawSrc = String(rawImgMatch[1]).replace(/&amp;/g, '&').trim();
        var rawAltMatch = rawLine.match(/\balt\s*=\s*["']([^"']*)["']/i);
        var rawAlt = rawAltMatch && rawAltMatch[1] ? rawAltMatch[1] : 'Property image';
        var rawImgUrl = getImageUrl(rawSrc, fallbackPageUrl);
        if (rawImgUrl) {
          return '<img src="' + escapeHtml(rawImgUrl) + '" alt="' + escapeHtml(rawAlt) + '" loading="lazy" referrerpolicy="no-referrer" />';
        }
      }

      var rawAnchorMatch = rawLine.match(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>(.*?)<\/a>/i);
      if (rawAnchorMatch && rawAnchorMatch[1]) {
        var rawHref = getSafeUrl(String(rawAnchorMatch[1]).replace(/&amp;/g, '&').trim());
        var rawLabel = rawAnchorMatch[2] ? rawAnchorMatch[2].replace(/<[^>]+>/g, '').trim() : 'View';
        if (rawHref) {
          return '<a href="' + escapeHtml(rawHref) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(rawLabel || 'View') + '</a>';
        }
      }

      var rendered = escapeHtml(line);

      while (rendered.match(/\*\*(.+?)\*\*/)) {
        rendered = rendered.replace(/\*\*(.+?)\*\*/, '<strong>$1</strong>');
      }

      rendered = rendered.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, function (_m, alt, url) {
        var imgUrl = getImageUrl(url, fallbackPageUrl);
        if (!imgUrl) return '';
        return '<img src="' + escapeHtml(imgUrl) + '" alt="' + escapeHtml(alt || 'Property image') + '" loading="lazy" referrerpolicy="no-referrer" />';
      });

      rendered = rendered.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_m, label, url) {
        var labelText = String(label || '').trim();
        var shouldRenderAsImage =
          /^image$/i.test(labelText) ||
          /\.(?:jpe?g|png|gif|webp|bmp|svg)(?:[?#].*)?$/i.test(url) ||
          String(url || '').toLowerCase().indexOf('72.61.147.184:8089/images/') !== -1;

        if (shouldRenderAsImage) {
          var imgUrl = getImageUrl(url, fallbackPageUrl);
          if (!imgUrl) return '';
          return '<img src="' + escapeHtml(imgUrl) + '" alt="' + escapeHtml(labelText || 'Property image') + '" loading="lazy" referrerpolicy="no-referrer" />';
        }

        var href = getSafeUrl(url);
        if (!href) return escapeHtml(labelText);
        return '<a href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(labelText || 'View') + '</a>';
      });

      return rendered;
    }

    if (!text) return '';
    var lines = text.split('\n');
    var html = '';
    var inList = false;
    var lastPropertyUrl = '';
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      var propertyLinkMatch = line.match(/\[View Property\]\(([^)]+)\)/i);
      if (propertyLinkMatch && propertyLinkMatch[1]) {
        var candidateUrl = getSafeUrl(propertyLinkMatch[1]);
        if (candidateUrl) lastPropertyUrl = candidateUrl;
      }
      if (line.match(/^[-*] /)) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += '<li>' + renderInline(line.replace(/^[-*] /, ''), lastPropertyUrl) + '</li>';
      } else if (line.match(/^\d+\. /)) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += '<li>' + renderInline(line.replace(/^\d+\. /, ''), lastPropertyUrl) + '</li>';
      } else {
        if (inList) { html += '</ul>'; inList = false; }
        html += '<p>' + renderInline(line, lastPropertyUrl) + '</p>';
      }
    }
    if (inList) html += '</ul>';
    return html;
  }

  function getSafeUrl(rawUrl) {
    if (!rawUrl) return '';
    var s = String(rawUrl).trim();
    if (!s) return '';
    if (s.startsWith('//')) s = 'https:' + s;
    return /^https?:\/\//i.test(s) ? s : '';
  }

  function getDefaultPropertyImage() {
    return 'https://images.estatesit.uk/BMESTATES/PHOTOS/bmest-003294-p-w-77b0xu62n.jpg?size=480%2C320&format=webp';
  }

  function getPropertyLink(prop) {
    return getSafeUrl(
      pick(
        prop.url,
        prop.link,
        prop.propertyUrl,
        prop.property_url,
        prop.details_url,
        prop.detail_url,
        prop.permalink,
        prop.viewUrl,
        prop.view_url
      )
    );
  }

  function normalizeImageUrl(rawUrl, fallbackPageUrl, targetSize) {
    var safe = getSafeUrl(rawUrl);
    if (!safe) return '';
    var lower = safe.toLowerCase();
    var sizeValue = (targetSize && /^\d+\s*,\s*\d+$/.test(String(targetSize))) ? String(targetSize).replace(/\s+/g, '') : '720,480';
    try {
      var u = new URL(safe);
      var host = String(u.hostname || '').toLowerCase();
      var path = String(u.pathname || '');
      if (host === 'media.estatesit.uk' && path.indexOf('/data/') === 0) {
        var optimizedFromMedia = new URL('https://images.estatesit.uk' + path.replace(/^\/data\//, '/'));
        optimizedFromMedia.searchParams.set('size', sizeValue);
        optimizedFromMedia.searchParams.set('format', 'webp');
        return optimizedFromMedia.toString();
      }
      if (host === 'images.estatesit.uk') {
        u.searchParams.set('size', sizeValue);
        if (!u.searchParams.has('format')) u.searchParams.set('format', 'webp');
        return u.toString();
      }
    } catch (e) { }
    if (lower.indexOf('72.61.147.184:8089/images/') !== -1 || lower.startsWith('http://')) {
      var fallback = getSafeUrl(fallbackPageUrl);
      if (fallback) return 'https://image.thum.io/get/width/720/noanimate/' + fallback;
      if (lower.indexOf('72.61.147.184:8089/images/') !== -1) return getDefaultPropertyImage();
    }
    if (lower.startsWith('http://')) return 'https://' + safe.slice('http://'.length);
    return safe;
  }

  function extractImageValue(value) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        var nested = extractImageValue(value[i]);
        if (nested) return nested;
      }
      return '';
    }
    if (typeof value === 'object') {
      var objectPick = pick(
        value.url,
        value.urlname,
        value.src,
        value.href,
        value.image,
        value.image_url,
        value.imageUrl,
        value.thumbnail,
        value.large,
        value.medium,
        value.small
      );
      if (objectPick) return objectPick;
    }
    return '';
  }

  function getDisplayTitle(prop) {
    var named = pick(prop.title, prop.name, prop.display_name, prop.displayName, prop.propertyName);
    if (named) return named;
    var a1 = pick(prop.address1);
    var a2 = pick(prop.address2);
    var a3 = pick(prop.address3);
    var a5 = pick(prop.address5);
    var addrParts = [];
    if (a1) addrParts.push(a1);
    if (a2) addrParts.push(a2);
    if (a3) addrParts.push(a3);
    if (a5) addrParts.push(a5);
    if (addrParts.length) return addrParts.join(', ');
    var fullAddr = pick(prop.address, prop.location, prop.area, prop.city, prop.postcode);
    if (fullAddr) return fullAddr;
    var code = pick(prop.propcode, prop.code, prop.id);
    if (code) return 'Property ' + code;
    return 'Property';
  }

  function getLocationText(prop) {
    var loc = pick(prop.location, prop.area, prop.city, prop.postcode, prop.address);
    if (loc) return loc;
    var a5 = pick(prop.address5);
    var pc = pick(prop.postcode);
    if (a5 && pc) return a5 + ' ' + pc;
    if (a5) return a5;
    if (pc) return pc;
    return '';
  }

  function getPriceValue(prop) {
    var raw = hasValue(prop.price) ? prop.price :
      hasValue(prop.priceask) ? prop.priceask :
        hasValue(prop.price_ask) ? prop.price_ask :
          hasValue(prop.rent) ? prop.rent :
            hasValue(prop.cost) ? prop.cost : '';
    var freq = pick(prop.pricetypefreq, prop.price_type_freq, prop.priceFrequency, prop.frequency);

    if (!hasValue(raw)) return '';

    var priceText = '';
    if (typeof raw === 'number' && isFinite(raw)) {
      priceText = '\u00A3' + raw.toLocaleString();
    } else {
      var s = String(raw).trim();
      if (/^\d+(?:\.\d+)?$/.test(s)) {
        priceText = '\u00A3' + Number(s).toLocaleString();
      } else {
        priceText = s;
      }
    }

    if (freq && !/pcm|pa|pw/i.test(priceText)) {
      priceText += ' ' + String(freq).toUpperCase();
    }
    return priceText;
  }

  function getImg(prop, targetSize) {
    var raw =
      extractImageValue(
        prop.imageUrl || prop.image_url || prop.img_url ||
        prop.image || prop.photo || prop.thumbnail ||
        prop.img || prop.picture || prop.image_file ||
        prop.images || prop.photos || prop.media ||
        prop.gallery || prop.pictures || prop.imageUrls
      ) || '';
    if (!raw) return '';
    return normalizeImageUrl(raw, getPropertyLink(prop), targetSize);
  }

  function warmPropertyImages(properties) {
    if (!Array.isArray(properties) || !properties.length || typeof Image === 'undefined') return;
    var top = properties.slice(0, 3);
    for (var i = 0; i < top.length; i++) {
      var warmUrl = getImg(top[i], '480,320');
      if (!warmUrl) continue;
      var pre = new Image();
      pre.decoding = 'async';
      pre.referrerPolicy = 'no-referrer';
      pre.src = warmUrl;
    }
  }

  function showPropertyDetail(prop) {
    var box = document.getElementById('lk-msgs');
    if (!box || !prop) return;

    var titleText = getDisplayTitle(prop);
    var locationText = getLocationText(prop);
    var propType = pick(prop.type, prop.property_type);
    var status = pick(prop.status, prop.badge);
    var desc = pick(prop.description, prop.summary, prop.details);
    var beds = pick(prop.beds, prop.bedrooms);
    var baths = pick(prop.baths, prop.bathrooms);
    var sqft = pick(prop.sqft, prop.size, prop.area_sqft);
    var listingUrl = getPropertyLink(prop);
    var propCode = pick(prop.propcode, prop.code, prop.id);
    var photoCount = Array.isArray(prop.photos) ? prop.photos.length : 0;

    var priceValue = getPriceValue(prop);
    if (!priceValue) priceValue = 'Price on request';

    var row = css(document.createElement('div'), { display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', gap: '8px' });
    var detail = document.createElement('div');
    detail.className = 'lk-det';

    var imgUrl = getImg(prop, '960,640');
    if (imgUrl) {
      var hero = document.createElement('img');
      hero.className = 'lk-det-hero';
      hero.src = imgUrl;
      hero.alt = titleText;
      hero.loading = 'lazy';
      hero.decoding = 'async';
      hero.referrerPolicy = 'no-referrer';
      hero.onerror = function () {
        var fallback = getDefaultPropertyImage();
        if (hero.src !== fallback) {
          hero.src = fallback;
        } else {
          hero.style.display = 'none';
        }
      };
      detail.appendChild(hero);
    }

    var body = document.createElement('div');
    body.className = 'lk-det-body';

    var t = document.createElement('div');
    t.className = 'lk-det-title';
    t.textContent = titleText;
    body.appendChild(t);

    if (locationText) {
      var l = document.createElement('div');
      l.className = 'lk-det-loc';
      l.textContent = '\uD83D\uDCCD ' + locationText;
      body.appendChild(l);
    }

    var p = document.createElement('div');
    p.className = 'lk-det-price';
    p.textContent = String(priceValue);
    body.appendChild(p);

    var hasGridData = beds || baths || sqft || propType || status || propCode || photoCount;
    if (hasGridData) {
      var grid = document.createElement('div');
      grid.className = 'lk-det-grid';

      function addCell(label, value) {
        if (!value) return;
        var cell = document.createElement('div');
        cell.className = 'lk-det-cell';
        var lbl = document.createElement('div');
        lbl.className = 'lk-det-lbl';
        lbl.textContent = label;
        var val = document.createElement('div');
        val.className = 'lk-det-val';
        val.textContent = String(value);
        cell.appendChild(lbl);
        cell.appendChild(val);
        grid.appendChild(cell);
      }

      addCell('Bedrooms', beds);
      addCell('Bathrooms', baths);
      addCell('Size', sqft);
      addCell('Type', propType);
      addCell('Status', status);
      addCell('Code', propCode);
      addCell('Photos', photoCount ? String(photoCount) : '');
      body.appendChild(grid);
    }

    if (desc) {
      var d = document.createElement('div');
      d.className = 'lk-det-desc';
      d.textContent = desc;
      body.appendChild(d);
    }

    var btns = document.createElement('div');
    btns.className = 'lk-det-btns';

    var interestBtn = document.createElement('button');
    interestBtn.className = 'lk-det-book';
    interestBtn.textContent = 'I am interested';
    interestBtn.onclick = function () {
      void send('I am interested in ' + titleText + (locationText ? ' (' + locationText + ')' : ''));
    };
    btns.appendChild(interestBtn);

    if (listingUrl) {
      var openBtn = document.createElement('button');
      openBtn.className = 'lk-det-ext';
      openBtn.textContent = 'Open Listing';
      openBtn.onclick = function () {
        window.open(listingUrl, '_blank', 'noopener,noreferrer');
      };
      btns.appendChild(openBtn);
    }

    body.appendChild(btns);
    detail.appendChild(body);
    row.appendChild(detail);
    box.appendChild(row);
    box.scrollTop = box.scrollHeight;
  }

  function buildPropertyCard(prop, index) {
    var card = document.createElement('div');
    card.className = 'lk-prop-card';
    var imgUrl = getImg(prop, '480,320');
    var imgWrap = document.createElement('div');
    imgWrap.style.cssText = 'width:100%;height:112px;background:#e8e8f4;overflow:hidden;';
    if (imgUrl) {
      var img = document.createElement('img');
      img.className = 'lk-prop-img';
      img.src = imgUrl;
      img.alt = getDisplayTitle(prop);
      img.loading = 'eager';
      img.decoding = 'async';
      img.fetchPriority = index === 0 ? 'high' : 'auto';
      img.referrerPolicy = 'no-referrer';
      img.style.cssText = 'width:100%;height:112px;object-fit:cover;display:block;';
      img.onerror = function () {
        var fallback = getDefaultPropertyImage();
        if (img.src !== fallback) {
          img.src = fallback;
          return;
        }
        img.style.display = 'none';
        imgWrap.textContent = '\uD83C\uDFE0';
        imgWrap.style.cssText = 'width:100%;height:112px;background:#e8e7f8;display:flex;align-items:center;justify-content:center;font-size:28px;';
      };
      imgWrap.appendChild(img);
    } else {
      imgWrap.textContent = '\uD83C\uDFE0';
      imgWrap.style.cssText = 'width:100%;height:112px;background:#e8e7f8;display:flex;align-items:center;justify-content:center;font-size:28px;';
    }
    card.appendChild(imgWrap);
    var body = document.createElement('div'); body.className = 'lk-prop-body';
    var title = document.createElement('div'); title.className = 'lk-prop-title'; title.textContent = getDisplayTitle(prop); body.appendChild(title);
    var loc = getLocationText(prop) || '';
    if (loc && loc !== title.textContent) { var locEl = document.createElement('div'); locEl.className = 'lk-prop-loc'; locEl.textContent = '\uD83D\uDCCD ' + loc; body.appendChild(locEl); }
    var price = getPriceValue(prop);
    if (price) { var priceEl = document.createElement('div'); priceEl.className = 'lk-prop-price'; priceEl.textContent = price; body.appendChild(priceEl); }
    var tags = [];
    if (prop.beds || prop.bedrooms) tags.push('\uD83D\uDECF\uFE0F ' + (prop.beds || prop.bedrooms) + ' Bed');
    if (prop.baths || prop.bathrooms) tags.push('\uD83D\uDEC0 ' + (prop.baths || prop.bathrooms) + ' Bath');
    if (prop.sqft || prop.size || prop.area_sqft) tags.push('\uD83D\uDCCF ' + (prop.sqft || prop.size || prop.area_sqft));
    if (prop.type || prop.property_type || prop.proptype) tags.push(prop.type || prop.property_type || prop.proptype);
    if (prop.propcode) tags.push(prop.propcode);
    if (tags.length) {
      var tagsEl = document.createElement('div'); tagsEl.className = 'lk-prop-tags';
      tags.forEach(function (t) { var tag = document.createElement('span'); tag.className = 'lk-prop-tag'; tag.textContent = t; tagsEl.appendChild(tag); });
      body.appendChild(tagsEl);
    }
    var btn = document.createElement('button'); btn.className = 'lk-prop-btn'; btn.textContent = 'View Details';
    btn.onclick = function () { showPropertyDetail(prop); }; body.appendChild(btn); card.appendChild(body);
    return card;
  }

  function extractFollowUpQuestion(text) {
    if (!text) return '';
    var lines = String(text).split('\n');
    for (var i = lines.length - 1; i >= 0; i--) {
      var line = lines[i].replace(/\*\*/g, '').replace(/<[^>]+>/g, '').trim();
      if (line && /\?$/.test(line)) return line;
    }
    return '';
  }

  function appendMessage(box, msg) {
    var block = css(document.createElement('div'), { display: 'flex', flexDirection: 'column', gap: '6px' });
    var row = css(document.createElement('div'), { display: 'flex', justifyContent: msg.user ? 'flex-end' : 'flex-start', alignItems: 'flex-end', gap: '8px' });
    var hasText = msg.text && msg.text.trim().length > 0;
    var hasProps = msg.properties && msg.properties.length > 0;
    var showTextBubble = hasText && (!hasProps || !!msg.user);
    if (showTextBubble) {
      var bubble = document.createElement('div');
      bubble.className = msg.user ? 'lk-bubble-user' : 'lk-bubble-bot';
      bubble.innerHTML = parseMarkdown(msg.text);
      css(bubble, { maxWidth: '80%', padding: '11px 14px', borderRadius: msg.user ? '18px 18px 4px 18px' : '18px 18px 18px 4px', color: msg.user ? '#ffffff' : cfg.colors.botText, lineHeight: String(cfg.lineHeight), background: msg.user ? cfg.colors.userBubble : cfg.colors.botBubble, fontSize: cfg.fontSize + 'px', opacity: '0' });
      row.appendChild(bubble); block.appendChild(row);
      animateBubble(bubble, msg.user);
    }
    if (hasProps) {
      var cardsRow = css(document.createElement('div'), { paddingLeft: '2px', paddingRight: '2px' });
      var scroll = document.createElement('div'); scroll.className = 'lk-props-scroll';
      var panelProps = msg.properties;
      panelProps.forEach(function (prop, idx) { scroll.appendChild(buildPropertyCard(prop, idx)); });
      cardsRow.appendChild(scroll); block.appendChild(cardsRow);

      if (!msg.user && hasText) {
        var followUp = extractFollowUpQuestion(msg.text);
        if (followUp) {
          var qRow = css(document.createElement('div'), { display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', gap: '8px' });
          var qBubble = document.createElement('div');
          qBubble.className = 'lk-bubble-bot';
          qBubble.innerHTML = parseMarkdown(followUp);
          css(qBubble, { maxWidth: '80%', padding: '11px 14px', borderRadius: '18px 18px 18px 4px', color: cfg.colors.botText, lineHeight: String(cfg.lineHeight), background: cfg.colors.botBubble, fontSize: cfg.fontSize + 'px', opacity: '0' });
          qRow.appendChild(qBubble);
          block.appendChild(qRow);
          animateBubble(qBubble, false);
        }
      }
    }
    box.appendChild(block);
    box.scrollTop = box.scrollHeight;
  }

  function showTyping(box) {
    removeTyping();
    var tRow = document.createElement('div');
    tRow.className = 'lk-typing-row';
    tRow.id = 'lk-typing-row';
    var tBubble = document.createElement('div');
    tBubble.className = 'lk-typing-bubble';
    tBubble.setAttribute('role', 'status');
    tBubble.setAttribute('aria-label', 'BM Estate AI Assistant is typing');
    var dots = document.createElement('div');
    dots.className = 'lk-typing-dots';
    for (var i = 0; i < 3; i++) {
      var d = document.createElement('span');
      d.className = 'lk-dot';
      dots.appendChild(d);
    }
    tBubble.appendChild(dots);
    tRow.appendChild(tBubble);
    box.appendChild(tRow); box.scrollTop = box.scrollHeight;
  }

  function removeTyping() {
    var old = document.getElementById('lk-typing-row');
    if (old) old.remove();
  }

  function renderMessages(box) {
    box.innerHTML = '';
    if (state.messages.length > 0 && state.messages[0].time) {
      var ts = document.createElement('div');
      ts.style.cssText = 'font-size:11px;color:rgba(0,0,0,.35);text-align:center;padding:4px 0 8px;';
      var h = state.messages[0].time.getHours(), m = state.messages[0].time.getMinutes();
      var ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12;
      ts.textContent = 'Today ' + String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ' ' + ap;
      box.appendChild(ts);
    }
    state.messages.forEach(function (msg) { appendMessage(box, msg); });
  }

  async function postWebhook(data) {
    var res = await fetch(cfg.webhookUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
      },
      body: JSON.stringify(data)
    });
    var raw = await res.text();
    if (!res.ok) throw new Error('HTTP ' + res.status + ' ' + raw);
    return parseWebhook(raw);
  }

  async function send(forced) {
    var box = document.getElementById('lk-msgs');
    var input = document.getElementById('lk-inp');
    var text = (forced || (input ? input.value : '') || '').trim();
    if (!text || !box) return;
    var userMsg = { id: Date.now(), text: text, user: true, time: new Date() };
    state.messages.push(userMsg);
    appendMessage(box, userMsg);
    if (input && !forced) input.value = '';
    showTyping(box);
    var since = Date.now();
    var timestamp = new Date().toISOString();
    var payload = {
      action: 'sendMessage',
      chatInput: text,
      message: text,
      sessionId: state.sessionId,
      timestamp: timestamp,
      metadata: {
        message: text,
        timestamp: timestamp,
        source: 'bm-estates-chatbot'
      }
    };
    var replyText = 'Unable to connect. Please check your connection and try again.';
    var replyProps = null;
    try {
      var parsed = await postWebhook(payload);
      replyText = parsed.message; replyProps = parsed.properties || null;
      if (replyProps && replyProps.length) warmPropertyImages(replyProps);
    } catch (e) { }
    var wait = 550 - (Date.now() - since);
    if (wait > 0) await new Promise(function (r) { setTimeout(r, wait); });
    removeTyping();
    var finalText = replyText || (replyProps && replyProps.length ? 'Here are some properties for you:' : 'Thanks for your message.');
    var botMsg = { id: Date.now() + 1, text: finalText, user: false, time: new Date(), properties: replyProps };
    state.messages.push(botMsg);
    appendMessage(box, botMsg);
  }

  function render() {
    removeTyping();
    root.innerHTML = '';
    var hPos = cfg.position !== 'left' ? { right: '20px', left: 'auto' } : { left: '20px', right: 'auto' };

    if (state.open) {
      var widget = css(document.createElement('div'), Object.assign({
        position: 'fixed', bottom: '96px', width: '390px',
        maxWidth: 'calc(100vw - 24px)', height: '600px',
        maxHeight: 'calc(100vh - 108px)', borderRadius: cfg.widgetRadius + 'px',
        overflow: 'hidden', zIndex: '9999', background: '#ffffff',
        border: '1px solid rgba(25,115,215,.25)', display: 'flex',
        flexDirection: 'column', boxShadow: '0 24px 48px rgba(0,0,0,.18)',
        fontFamily: cfg.fontFamily, fontSize: cfg.fontSize + 'px'
      }, hPos));
      widget.id = 'lk-widget';

      var head = css(document.createElement('div'), {
        padding: '14px 16px', background: cfg.colors.brandA, color: '#fff',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: '0'
      });
      var headLeft = css(document.createElement('div'), { display: 'flex', alignItems: 'center', gap: '12px', minWidth: '0' });
      var avatar = css(document.createElement('div'), { width: '42px', height: '42px', minWidth: '42px', borderRadius: '14px', background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' });
      if (cfg.logo) {
        var logoImg = document.createElement('img');
        logoImg.src = cfg.logo;
        logoImg.style.cssText = 'width:38px;height:38px;border-radius:8px;object-fit:contain;background:transparent;';
        logoImg.alt = cfg.companyName;
        logoImg.onerror = function () { avatar.removeChild(logoImg); avatar.textContent = '\uD83E\uDD16'; };
        avatar.appendChild(logoImg);
      } else { avatar.textContent = '\uD83E\uDD16'; }
      var titleGroup = css(document.createElement('div'), { minWidth: '0' });
      var titleEl = css(document.createElement('div'), { fontWeight: '700', fontSize: '15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' });
      titleEl.textContent = 'BM Estate AI Assistant';
      var statusRow = css(document.createElement('div'), { display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' });
      var onlineDot = document.createElement('span');
      onlineDot.style.cssText = 'width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block;box-shadow:0 0 5px 1px #22c55e;animation:lkPulse 1.5s infinite;';
      var statusTxt = css(document.createElement('span'), { fontSize: '12px', color: 'rgba(255,255,255,.75)' });
      statusTxt.textContent = 'Online';
      statusRow.appendChild(onlineDot); statusRow.appendChild(statusTxt);
      titleGroup.appendChild(titleEl); titleGroup.appendChild(statusRow);
      headLeft.appendChild(avatar); headLeft.appendChild(titleGroup);
      var closeBtn = css(document.createElement('button'), { border: 'none', background: 'rgba(255,255,255,.18)', color: '#fff', borderRadius: '999px', width: '32px', height: '32px', cursor: 'pointer', fontSize: '20px', lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' });
      closeBtn.innerHTML = '&times;';
      closeBtn.onclick = function () { state.open = false; render(); };
      head.appendChild(headLeft); head.appendChild(closeBtn);

      var pillsWrap = document.createElement('div');
      pillsWrap.className = 'lk-pills-wrap';

      var pillsGrid = document.createElement('div');
      pillsGrid.className = 'lk-pills-grid';

      var allPills = [
        { icon: '\uD83D\uDCCB', label: 'Services', msg: 'What services do you offer?' },
        { icon: '\uD83C\uDFD8\uFE0F', label: 'Lettings', msg: 'Do you have a lettings service? \uD83C\uDFD8\uFE0F' },
        { icon: '\uD83D\uDD27', label: 'Maintenance', msg: 'I need maintenance help' },
        { icon: '\uD83C\uDFE0', label: 'I want to buy', msg: 'I want to buy a property' },
        { icon: '\uD83D\uDCBC', label: 'I want to rent', msg: 'I want to rent a property' },
        { icon: '\uD83D\uDCDD', label: 'I want to sell', msg: 'I want to sell my property' }
      ];

      allPills.forEach(function (p) {
        var btn = document.createElement('button');
        btn.className = 'lk-pill';
        btn.style.fontFamily = cfg.fontFamily;
        btn.textContent = p.icon + ' ' + p.label;
        btn.onmouseover = function () { btn.style.background = '#155fb8'; };
        btn.onmouseout = function () { btn.style.background = '#1973d7'; };
        btn.onclick = function () { void send(p.msg); };
        pillsGrid.appendChild(btn);
      });

      pillsWrap.appendChild(pillsGrid);

      var msgBox = css(document.createElement('div'), {
        flex: '1', overflowY: 'auto', padding: '14px 12px 20px',
        display: 'flex', flexDirection: 'column', gap: '10px', background: '#ffffff'
      });
      msgBox.id = 'lk-msgs';

      var inputBar = css(document.createElement('div'), {
        display: 'flex', gap: '8px', borderTop: '1px solid rgba(0,0,0,.08)',
        padding: '10px 12px', background: '#ffffff', alignItems: 'center', flexShrink: '0'
      });
      var input = css(document.createElement('input'), {
        flex: '1', border: '1px solid rgba(0,0,0,.12)', borderRadius: '999px',
        padding: '10px 16px', fontSize: '13px', background: '#f5f5f8',
        color: '#1a1a2e', fontFamily: cfg.fontFamily
      });
      input.id = 'lk-inp';
      input.placeholder = cfg.inputPlaceholder;
      input.onkeydown = function (e) { if (e.key === 'Enter') void send(); };
      var sendBtn = css(document.createElement('button'), {
        border: 'none', background: cfg.colors.brandA, color: '#fff',
        borderRadius: '50%', width: '42px', height: '42px', minWidth: '42px',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
      });
      sendBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" style="width:18px;height:18px;display:block;"><path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2L15 22 11 13 2 9l20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      sendBtn.onclick = function () { void send(); };
      inputBar.appendChild(input); inputBar.appendChild(sendBtn);

      var powered = css(document.createElement('div'), {
        fontSize: '11px', color: 'rgba(0,0,0,.45)', textAlign: 'center',
        padding: '10px 0 12px', background: '#ffffff',
        borderTop: '1px solid rgba(0,0,0,.06)', flexShrink: '0'
      });
      var poweredLink = document.createElement('a');
      poweredLink.href = 'https://oyik.ai'; poweredLink.target = '_blank'; poweredLink.rel = 'noopener noreferrer';
      poweredLink.textContent = 'Powered by Oyik.AI';
      css(poweredLink, { color: '#1973d7', textDecoration: 'none', fontWeight: '600', background: 'rgba(25,115,215,.08)', padding: '4px 12px', borderRadius: '999px' });
      powered.appendChild(poweredLink);

      widget.appendChild(head);
      widget.appendChild(pillsWrap);
      widget.appendChild(msgBox);
      widget.appendChild(inputBar);
      widget.appendChild(powered);
      root.appendChild(widget);

      renderMessages(msgBox);
    }

    if (!state.open) {
      var launcher = css(document.createElement('button'), Object.assign({
        position: 'fixed', bottom: cfg.bottom,
        width: cfg.launcherSize + 'px', height: cfg.launcherSize + 'px',
        border: '2.5px solid rgba(255,255,255,0.7)', borderRadius: cfg.launcherRadius + 'px',
        color: '#fff', cursor: 'pointer', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '3px', zIndex: '9998', background: cfg.colors.brandA,
        boxShadow: '0 12px 28px rgba(25,115,215,.45)'
      }, hPos));
      launcher.innerHTML = '<svg viewBox="0 0 24 24" fill="none" style="width:20px;height:20px;"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="font-size:10px;font-weight:600;">' + cfg.launcherLabel + '</span>';
      launcher.onclick = function () { state.open = true; render(); };
      root.appendChild(launcher);
    }
  }

  render();
})();
